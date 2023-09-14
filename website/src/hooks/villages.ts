import { useMutation, useQuery } from "react-query";
import PB from "../PB";

interface Village {
    id?: string;
    creator_name: string;
    creator_phone: string;
    created: string;
    updated: string;
    name: string;
    description: string;
    contact: string;
    contact_phone: string;
    needs: string;
    commune: string;
    region: string;
    population: number;
    menage: number;
    province: string;
    cercle: string;
    latitude: number;
    longitude: number;
    level: number;
}

const useAddVillage = () => {
    const mutation = useMutation({
        mutationFn: async (village: Village) => {
            delete village.id;
            await PB.collection("villages").create(village);
        },
    });

    return mutation;
};

const useGetVillages = () => {
    return useQuery({
        queryKey: "villages",
        queryFn: async () => {
            const villages = await PB.collection("villages").getFullList<Village>({
                fields: "id,description,name,population,menage,region,province,type,cercle,commune,contact,contact_phone,created,latitude,longitude",
                sort: "-created",
                perPage: 500,
            });
    
            return villages;
        },
        refetchOnMount: false,
        staleTime: Infinity,
    });
};

export { useGetVillages, useAddVillage };

export type { Village };
