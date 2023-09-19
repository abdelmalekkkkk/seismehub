import { useMutation } from "react-query";
import PB from "../PB";


const useAddConvoy = () => {
    const mutation = useMutation({
        mutationFn: async (convoy: Convoy) => {
            const c = {...convoy, id: undefined};
            delete c.id;
            await PB.collection("convoys").create(convoy)
        }
    })

    return mutation;
}

export {
    useAddConvoy
}
