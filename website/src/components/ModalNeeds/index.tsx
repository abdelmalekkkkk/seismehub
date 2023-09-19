import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Tooltip } from "primereact/tooltip";
import AddNeed from "../AddNeed";
import { useGetVillage } from "../../contexts/MapContext";
import dayjs from "dayjs";

const ModalNeeds = (_village: Village) => {
    const village = useGetVillage(_village.id);
    const [visible, setVisible] = useState(false);

    if (village == undefined) {
        return null;
    }

    const id = "village_needs-" + village.id;

    return (
        <div  key={village.id}>
            <Tooltip target={`#${id}`} className="text-sm" />
            <div>
                <span
                    id={id}
                    onClick={() => setVisible(true)}
                    data-pr-at="right+5 center"
                    data-pr-tooltip="Declarer un besoin"
                    className="underline font-medium border-b border-dotted text-red-600 cursor-pointer"
                >
                    {village.needs.length}
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
                        Voici les besoins essentiels de ce Douar. Si vous savez
                        que ce Douar nécessite plus que cela, veuillez le
                        déclarer.
                    </p>
                    {village.needs.length > 0 ? (
                        <ul role="list" className="grid grid-cols-2 gap-4 mt-4">
                            {village.needs.map((need) => (
                                <li
                                    className="rounded-lg bg-white shadow px-4 py-4 border border-gray-100"
                                    key={need.id}
                                >
                                    <div className="font-medium text-indigo-700">
                                        {need.name}
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500 mr-1">
                                            Quantité:
                                        </span>
                                        <span className="text-sm font-medium text-indigo-700">
                                            {need.quantity}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500 mr-1">
                                            Declaré le
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {dayjs(need.created).format("DD/MM/YYYY à HH:mm")}
                                        </span>
                                    </div>
                                    <p className="border-t border-gray-200 mt-2 pt-2 text-sm text-gray-500 italic">
                                        {need.details}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-gray-500 text-center mt-4">Aucun besoin n'a été déclaré.</p>
                    )}
                    <div className="flex justify-end mt-4">
                        <AddNeed village={village} />
                    </div>
                </Dialog>
            </div>
        </div>
    );
};

export default ModalNeeds;
