import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAddConvoyToVillage, useMapFilter, useNeedsTypes } from "../../contexts/MapContext";
import {
    AutoComplete,
    AutoCompleteChangeEvent,
    AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { useAddConvoy } from "../../hooks/convoys";
import { toast } from "react-toastify";

type AddNeedProps = {
    village?: Village;
};

type AddConvoyData = {
    village_name?: VillageName;
    needs: NeedType[];
    ngo_name: string;
    details: string;
    date: string;
};


const AddConvoy = ({ village }: AddNeedProps) => {
    
    const currentVillageName =
        village == undefined
            ? undefined
            : {
                  name: village.name,
                  id: village.id,
              };

              const defaultState = {
                village_name: currentVillageName,
                    ngo_name: "",
                    needs: [],
                    details: "",
                    date: "",
            };
            

    const [open, setOpen] = useState(false);

    const [data, setData] = useState<AddConvoyData>(defaultState);

    const needsTypes = useNeedsTypes();

    const filter = useMapFilter();

    const [items, setItems] = useState<VillageName[]>([]);

    const addConvoyToVillage = useAddConvoyToVillage();
    const { mutate, isLoading, isSuccess, data: newConvoy } = useAddConvoy();

    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault()
        mutate({
            village: data.village_name?.id ?? "",
            fulfilled_needs: data.needs.map(n => n.id),
            ngo_name: data.ngo_name,
            date: data.date,
            details: data.details,
        })
    }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Votre engagement a été enregistré avec succès.")
            // Close the modal
            setOpen(false);
            // Reset form
            setData(defaultState)
            // Update the village's needs
            if (data.village_name?.id == undefined) {
                return;
            }
            addConvoyToVillage(data.village_name.id, {
                id: newConvoy.id,
                created: newConvoy.created,
                date: data.date,
                details: data.details,
                ngo_name: data.ngo_name,
                fulfilled_needs: data.needs,
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

    const changeNGOName = (event: ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            ngo_name: event.target.value,
        });
    };

    const changeNeeds = (e: CheckboxChangeEvent) => {
        if (e.checked) {
            setData(data => ({
                ...data,
                needs: [...data.needs, e.value]
            }));
        } else {
            setData(data => ({
                ...data,
                needs: data.needs.filter(needType => needType.key != e.value.key)
            }));
        }
    }

    const changeDetails = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setData({
            ...data,
            details: event.target.value,
        });
    }

    const changeDate = (event: CalendarChangeEvent) => {
        const date = event.value as Date;
        setData({
            ...data,
            date: date.toUTCString()
        });
    }


    return (
        <>
            <Button
                size="small"
                severity="success"
                onClick={() => setOpen(true)}
            >
                Engagez-vous
            </Button>
            <Dialog
                visible={open}
                onHide={() => setOpen(false)}
                header="Engagez-vous"
                headerClassName="text-sm"
                dismissableMask={true}
                style={{
                    width: "600px",
                }}
            >
                <p className="text-sm text-gray-500">
                Veuillez remplir ce formulaire si vous avez l'intention d'envoyer de l'aide à ce village, ou si vous avez déjà envoyé de l'aide.
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
                        <label
                            className="text-sm font-bold"
                        >
                            Nom de l'association
                        </label>
                        <InputText className="p-inputtext-sm" onChange={changeNGOName} value={data.ngo_name} />
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label className="text-sm font-bold">
                            Type de besoin
                        </label>
                        <div className="grid gap-1">
                            {needsTypes.map(need => <div key={need.key} className="flex items-center">
                                <Checkbox inputId={`need_type-${need.key}`} checked={data.needs.find(needType => needType.key == need.key) != undefined} onChange={changeNeeds} value={need} />
                                <label className="text-sm ml-2 cursor-pointer" htmlFor={`need_type-${need.key}`}>{need.name}</label>
                            </div>)}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor={`need_description`} className="text-sm font-bold">
                            Date d'engagement
                        </label>
                        <Calendar inputClassName="p-inputtext-sm" panelStyle={{minWidth: "auto", width: "auto"}} onChange={changeDate}/>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <label htmlFor={`need_description`} className="text-sm font-bold">
                            Plus de détails
                        </label>
                        <InputTextarea id="need_description" className="text-sm p-inputtext-sm" onChange={changeDetails} value={data.details} />
                    </div>
                   
                    <div className="flex justify-end">
                        <Button size="small" disabled={isLoading}>Envoyer</Button>
                    </div>
                </form>
            </Dialog>
        </>
    );
};

export default AddConvoy;
