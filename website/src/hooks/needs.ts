import { useMutation, useQuery } from "react-query";
import PB from "../PB";

const useGetNeedsTypes = () => {
    return useQuery({
        queryKey: "needs_types",
        queryFn: async () => {
            const villages = await PB.collection("needs_types").getFullList<NeedType>({
                fields: "id,key,name",
            });
    
            return villages;
        },
        refetchOnMount: false,
        staleTime: Infinity,
    });
};

const useAddNeed = () => {
    const mutation = useMutation({
        mutationKey: "villages",
        mutationFn: async (need: AddNeed) => {
            const result = await PB.collection("needs").create(need);
            return result as unknown as NeedResponse;
        },
    });

    return mutation;
};

export { useGetNeedsTypes, useAddNeed };