import { useMutation } from "react-query";
import PB from "../PB";

interface Convoy {
    id?: string;
    villages?: string[];
    organization?: string;
    details?: string;
    date: string;
    villages_input: string;
    organization_input: string;
    proof: string;
}

const useAddConvoy = () => {
    const mutation = useMutation({
        mutationFn: async (convoy: Convoy) => {
            delete convoy.id;
            await PB.collection("convoys").create(convoy)
        }
    })

    return mutation;
}

export {
    useAddConvoy
}

export type {
    Convoy
}