import { DiscIcon, PlusIcon } from "@radix-ui/react-icons";
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    Flex,
    RadioGroup,
    Text,
    TextArea,
    TextField,
} from "@radix-ui/themes";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useAddConvoy, Convoy } from "../../hooks/convoys";
import { toast } from 'react-toastify';
import { useGetVillages } from "../../hooks/villages";


const AddConvoy = () => {
    const {data: villages, isLoading: isLoadingVillages} = useGetVillages();

    const [open, setOpen] = useState<boolean>(false);

    const convoyDetails = useRef<Convoy>({
        villages_input: "",
        organization_input: "",
        date: "",
        details: "",
        proof: "",
    });

    const {status, mutate, isLoading} = useAddConvoy(); 

    useEffect(() => {
        if (status == "success") {
            toast.success("Le convoi a été ajouté avec succès.");
            setOpen(false);
        }
    }, [status]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        mutate(convoyDetails.current);
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>
                <Button>
                    <PlusIcon /> Ajouter une convoi
                </Button>
            </Dialog.Trigger>
            <Dialog.Content style={{ maxWidth: 600 }}>
                <form onSubmit={handleSubmit}>
                    <Dialog.Title>Ajouter un convoi</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                    Afin de s'assurer qu'aucun village ne passe inaperçu, nous vous exhortons à remplir ce formulaire chaque fois que vous (ou une personne que vous connaissez) envoyez un convoi vers un village spécifique. De cette manière, nous pouvons déterminer quels villages ont besoin de plus d'aide et lesquels n'en ont pas besoin.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Les villages ciblés
                        </Text>
                        <TextArea
                            required
                            name="villages_input"
                            onChange={(e) =>
                                (convoyDetails.current.villages_input =
                                    e.target.value)
                            }
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Organization
                        </Text>
                        <TextField.Input
                            required
                            name="organization_input"
                            onChange={(e) =>
                                (convoyDetails.current.organization_input =
                                    e.target.value)
                            }
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Date
                        </Text>
                        <TextField.Input
                            required
                            type="date"
                            name="date"
                            onChange={(e) =>
                                (convoyDetails.current.date =
                                    e.target.value)
                            }
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Preuves de la crédibilité
                        </Text>
                        <TextField.Input
                            required
                            name="proof"
                            onChange={(e) =>
                                (convoyDetails.current.proof =
                                    e.target.value)
                            }
                        />
                    </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Annuler
                            </Button>
                        </Dialog.Close>
                        <Button type="submit" disabled={isLoading}>Ajouter</Button>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default AddConvoy;
