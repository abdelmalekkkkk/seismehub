import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { useGetVillage } from "../../contexts/MapContext";
import AddConvoy from "../AddConvoy";
import { Calendar, Group } from "iconoir-react";
import dayjs from "dayjs";

const ModalConvoys = (_village: Village) => {
    const village = useGetVillage(_village.id);
    const [visible, setVisible] = useState(false);

    if (village == undefined) {
        return null;
    }

    return (
        <div key={village.id}>
            <span
                onClick={() => setVisible(true)}
                className="underline font-medium border-b border-dotted text-green-600 cursor-pointer"
            >
                {village.convoys.length}
            </span>
            <Dialog
                visible={visible}
                header={village.name}
                onHide={() => setVisible(false)}
                headerClassName="text-sm"
                dismissableMask={true}
                style={{
                    maxWidth: "800px",
                }}
            >
                <p>
                    Voici les ONG qui se sont engagées à aider ce village. Si
                    votre ONG s'engage à envoyer de l'aide à ce village,
                    veuillez ajouter un engagement.
                </p>
                {village.convoys.length > 0 ? (
                    <ul className="grid grid-cols-2 gap-4 mt-4">
                        {village.convoys.map((convoy) => (
                            <li key={convoy.id} className="rounded-lg bg-white shadow px-4 py-4 border border-gray-100 grid gap-1">
                                <div className="flex items-center">
                                    <Group width={20} className="text-indigo-700" /><span className=" text-gray-800 ml-2">{convoy.ngo_name}</span>
                                </div>
                                <div className="flex items-center">
                                    <Calendar width={20} className="text-indigo-700" /><span className="text-gray-800 ml-2 text-sm">{dayjs(convoy.date).format("DD/MM/YYYY à HH:mm")}</span>
                                </div>
                                {convoy.fulfilled_needs != undefined && <ul className="list-disc ml-4">
                                    {convoy.fulfilled_needs.map(need => <li className="text-sm">{need.name}</li>)}
                                </ul>}
                                <p className="italic text-sm">{convoy.details}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500 text-center mt-4">Aucun engagement ajouté.</p>
                )}
                <div className="flex justify-end mt-4">
                        <AddConvoy village={village} />
                    </div>
            </Dialog>
        </div>
    );
};

export default ModalConvoys;
