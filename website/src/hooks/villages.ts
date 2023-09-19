import { useMutation, useQuery } from "react-query";
import PB from "../PB";




const useAddVillage = () => {
    const mutation = useMutation({
        mutationFn: async (village: Village) => {
            await PB.collection("villages").create(village);
        },
    });

    return mutation;
};

const useGetVillages = () => {
    return useQuery({
        queryKey: "villages",
        queryFn: async (): Promise<Village[]> => {
            const villages = await PB.collection("villages").getFullList<VillageResponse>({
                fields: "id,description,name,severity,accessible_road,population,menage,region,province,type,cercle,commune,contact,contact_phone,created,latitude,longitude,expand.convoys(village),expand.needs(village)",
                expand: "needs(village),needs(village).need_type,convoys(village),convoys(village).organization,convoys(village).fulfilled_needs",
                sort: "-created",
                perPage: 500,
            });
    
            return villages.map(village => {
                let needs: Need[] = [];
                let convoys: Convoy[] = [];
                let needs_keys: NeedTypeKey[] = [];

                if (village.expand?.["needs(village)"] != undefined) {
                    needs = village.expand?.["needs(village)"].map(n => {
                        return {
                            id: n.id,
                            type: n.expand.need_type.key,
                            quantity: n.quantity,
                            verified: n.verified,
                            details: n.details,
                            urgency: n.urgency,
                            name: n.expand.need_type.name,
                            created: n.created
                        }
                    });

                    needs_keys = village.expand?.["needs(village)"].map(n => {
                        return n.expand.need_type.key
                    });
                }

                if (village.expand?.["convoys(village)"] != undefined) {
                    convoys = village.expand?.["convoys(village)"].map(c => {
                        return {
                            id: c.id,
                            created: c.created,
                            date: c.date,
                            details: c.details,
                            ngo: c?.expand?.organization,
                            ngo_name: c.ngo_name,
                            fulfilled_needs: c?.expand?.fulfilled_needs.map(fn => ({
                                ...fn,
                                key: fn.key as NeedTypeKey
                            }))
                        }
                    });
                }

                return {
                    ...village,
                    needs: needs,
                    needs_keys: needs_keys,
                    convoys: convoys,
                };
            });

 
        },
        refetchOnMount: false,
        staleTime: Infinity,
    });
};

export { useGetVillages, useAddVillage };