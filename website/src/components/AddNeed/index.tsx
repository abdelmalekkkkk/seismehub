import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAddNeedToVillage, useMapFilter, useNeedsTypes } from "../../contexts/MapContext";
import {
    AutoComplete,
    AutoCompleteChangeEvent,
    AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { InputTextarea } from "primereact/inputtextarea";
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber";
import { useAddNeed } from "../../hooks/needs";
import { toast } from "react-toastify";

type AddNeedProps = {
    village?: Village;
};

type AddNeedData = {
    village_name?: VillageName;
    need?: NeedType;
    details?: string;
    quantity?: number;
};

const AddNeed = ({ village }: AddNeedProps) => {
    const currentVillageName =
        village == undefined
            ? undefined
            : {
                  name: village.name,
                  id: village.id,
              };

    const [open, setOpen] = useState(false);

    const [data, setData] = useState<AddNeedData>({
        village_name: currentVillageName,
    });

    const needsTypes = useNeedsTypes();

    const filter = useMapFilter();

    const [items, setItems] = useState<VillageName[]>([]);

    const addNeedToVillage = useAddNeedToVillage();
    const { mutate, isLoading, isSuccess, data: newNeed } = useAddNeed();

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault()
        mutate({
            village: data.village_name?.id ?? "",
            need_type: data.need?.id ?? "",
            details: data.details ?? "",
            quantity: data.quantity ?? 0,
        })
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Le besoin a été déclaré avec succès.")
            // Close the modal
            setOpen(false);
            // Reset form
            setData({
                village_name: currentVillageName,
            })
            // Update the village's needs
            if (data.village_name?.id == undefined || data.need == undefined) {
                return;
            }
            addNeedToVillage(data.village_name.id, {
                type: data.need.key,
                details: newNeed.details,
                name: data.need.name,
                created: newNeed.created,
                id: newNeed.id,
                quantity: newNeed.quantity,
                verified: newNeed.verified,
                urgency: newNeed.urgency,
            });
        }
    }, [isSuccess]);

    const search = async (event: AutoCompleteCompleteEvent) => {
        const results = await filter.suggest(event.query);
        setItems(results);
    };

    const changeVillageName = (event: AutoCompleteChangeEvent) => {
        setData({
            ...data,
            village_name: event.value,
        });
    };

    const changeNeed = (event: RadioButtonChangeEvent) => {
        setData({
            ...data,
            need: event.value,
        })
    }

    const changeDetails = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setData({
            ...data,
            details: event.target.value,
        })
    }

    const changeQuantity = (event: InputNumberChangeEvent) => {
        setData({
            ...data,
            quantity: event.value ?? undefined,
        })
    }

    return (
        <>
            <Button
                size="small"
                severity="danger"
                onClick={() => setOpen(true)}
            >
                Déclarer un besoin
            </Button>
            <Dialog
                visible={open}
                onHide={() => setOpen(false)}
                header="Déclarer un besoin"
                headerClassName="text-sm"
                dismissableMask={true}
                style={{
                    width: "500px",
                }}
            >
                <p className="text-sm text-gray-500">
                    Veuillez remplir ce formulaire pour nous informer de ce dont
                    un Douar a besoin.
                </p>
                <form className="grid grid-cols-1 gap-4 mt-4" onSubmit={handleOnSubmit}>
                    <div className="grid grid-cols-1 gap-2">
                        <label
                            className="text-sm font-bold"
                        >
                            Douar
                        </label>
                        <AutoComplete
                            className="w-full"
                            inputClassName="p-inputtext-sm w-full"
                            field="name"
                            value={data.village_name}
                            suggestions={items}
                            onChange={changeVillageName}
                            completeMethod={search}
                            forceSelection
                            disabled={currentVillageName != undefined}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label className="text-sm font-bold">
                            Type de besoin
                        </label>
                        <div className="grid gap-1">
                            {needsTypes.map(need => <div key={need.key} className="flex items-center">
                                <RadioButton inputId={`need_type-${need.key}`} checked={data.need?.key == need.key} onChange={changeNeed} value={need} />
                                <label className="text-sm ml-2" htmlFor={`need_type-${need.key}`}>{need.name}</label>
                            </div>)}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor={`need_description`} className="text-sm font-bold">
                            Détails
                        </label>
                        <InputTextarea id="need_description" className="text-sm p-inputtext-sm" onChange={changeDetails} value={data.details} />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor={`need_description`} className="text-sm font-bold">
                            Quantité
                        </label>
                        <InputNumber id="need_description" className="text-sm w-2 p-inputtext-sm" onChange={changeQuantity} value={data.quantity} />
                    </div>
                    <div className="flex justify-end">
                        <Button size="small" disabled={isLoading}>Envoyer</Button>
                    </div>
                </form>
            </Dialog>
        </>
    );
};

export default AddNeed;
