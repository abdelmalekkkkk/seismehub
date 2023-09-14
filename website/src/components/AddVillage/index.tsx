import { DiscIcon } from "@radix-ui/react-icons";
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    Flex,
    RadioGroup,
    Text,
    TextField,
} from "@radix-ui/themes";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Village, useAddVillage } from "../../hooks/villages";
import { toast } from 'react-toastify';

const aidTypes: string[] = [
    "Extraction des victimes sous les décombes",
    "Nourriture",
    "Médicaments",
    "Couvertures, vêtements, ustensiles...",
    "Transport",
    "Soutien psychologique",
    "Libération d'accès routiers",
    "Réhabilitation Eau",
    "Réhabilitation Electricité",
    "Réhabilitation Réseau Mobile",
    "Réhabilitation Asssinissement",
    "Autre",
];

const AddVillage = () => {
    const [open, setOpen] = useState<boolean>(false);

    const villageDetails = useRef<Village>({
        creator_name: "",
        creator_phone: "",
        created: "",
        updated: "",
        name: "",
        description: "",
        contact: "",
        contact_phone: "",
        needs: "",
        video_url: "",
        google_maps_url: "",
        latitude: 0,
        longitude: 0,
        level: 0,
    });

    const needs = useRef<string[]>([]);

    const addNeed = (val: string) => {
        needs.current.push(val);
    };

    const deleteNeed = (val: string) => {
        needs.current = needs.current.filter((need) => need != val);
    };

    const handleNeedCheck = (
        state: boolean | "indeterminate",
        need: string
    ) => {
        if (state === true) {
            addNeed(need);
        } else {
            deleteNeed(need);
        }
    };

    const {status, mutate, isLoading} = useAddVillage(); 

    useEffect(() => {
        if (status == "success") {
            toast.success("Le village a été signalé avec succès.");
            setOpen(false);
        }
    }, [status]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        villageDetails.current.needs = needs.current.join(",")
        mutate(villageDetails.current);
    }

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger>
                <Button color="tomato">
                    <DiscIcon /> Je signale des victimes
                </Button>
            </Dialog.Trigger>
            <Dialog.Content style={{ maxWidth: 600 }}>
                <form onSubmit={handleSubmit}>
                    <Dialog.Title>Signaler un village</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Save-vous que des dizianes de villages sévèrement
                        touchés par le séisme n'ont encore reçu aucune aide?
                        Mobilisez vous pour nous adier à lister toute demande
                        crédible d'aide.
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Votre nom
                            </Text>
                            <TextField.Input
                                required
                                name="contact_name"
                                onChange={(e) =>
                                    (villageDetails.current.creator_name =
                                        e.target.value)
                                }
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Votre numéro de téléphone
                            </Text>
                            <TextField.Input
                                name="contact_phone"
                                onChange={(e) =>
                                    (villageDetails.current.creator_phone =
                                        e.target.value)
                                }
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Nom du douar
                            </Text>
                            <TextField.Input
                                required
                                onChange={(e) =>
                                    (villageDetails.current.name =
                                        e.target.value)
                                }
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Localisation GPS (lien Google Maps)
                            </Text>
                            <TextField.Input
                                required
                                onChange={(e) =>
                                    (villageDetails.current.google_maps_url =
                                        e.target.value)
                                }
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Situation
                            </Text>
                            <RadioGroup.Root defaultValue="0">
                                <Flex gap="2" direction="column">
                                    <label>
                                        <Flex gap="2" align="center">
                                            <RadioGroup.Item
                                                value="0"
                                                onChange={() =>
                                                    (villageDetails.current.level = 0)
                                                }
                                            />
                                            <Text size="2">Modérée</Text>
                                        </Flex>
                                    </label>
                                    <label>
                                        <Flex gap="2" align="center">
                                            <RadioGroup.Item
                                                value="1"
                                                onChange={() =>
                                                    (villageDetails.current.level = 1)
                                                }
                                            />
                                            <Text size="2">Assez dégradée</Text>
                                        </Flex>
                                    </label>
                                    <label>
                                        <Flex gap="2" align="center">
                                            <RadioGroup.Item
                                                value="2"
                                                onChange={() =>
                                                    (villageDetails.current.level = 2)
                                                }
                                            />
                                            <Text size="2">Très sévère</Text>
                                        </Flex>
                                    </label>
                                </Flex>
                            </RadioGroup.Root>
                        </label>
                        <Box>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Nature du besoin
                            </Text>
                            {aidTypes.map((type, index) => {
                                return (
                                    <Box key={index}>
                                        <Checkbox
                                            onCheckedChange={(c) =>
                                                handleNeedCheck(c, type)
                                            }
                                        />{" "}
                                        <Text size="2">{type}</Text>
                                    </Box>
                                );
                            })}
                        </Box>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Lien web utile (video, photo, audio...)
                            </Text>
                            <TextField.Input
                                onChange={(e) =>
                                    (villageDetails.current.video_url =
                                        e.target.value)
                                }
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Contact sur place: Nom
                            </Text>
                            <TextField.Input
                                onChange={(e) =>
                                    (villageDetails.current.contact =
                                        e.target.value)
                                }
                            />
                        </label>
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Contact sur place: Mobile
                            </Text>
                            <TextField.Input
                                onChange={(e) =>
                                    (villageDetails.current.contact_phone =
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
                        <Button type="submit" disabled={isLoading}>Envoyer</Button>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default AddVillage;
