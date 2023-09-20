import { useMutation } from "react-query";
import PB from "../PB";


const useAddConvoy = () => {
    const mutation = useMutation({
        mutationFn: async (convoy: AddConvoy) => {
            const result = await PB.collection("convoys").create(convoy);
            return result as unknown as ConvoyResponse;
        }
    })

    return mutation;
}

export {
    useAddConvoy
}
