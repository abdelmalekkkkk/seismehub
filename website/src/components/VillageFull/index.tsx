import { useCloseVillage, useSelectedVillage } from "../../contexts/MapContext";
import {  XCircleIcon } from "@heroicons/react/20/solid";
import { Village } from "../../hooks/villages";

type VillageField = {
    key: keyof Village;
    label: string;
};

const fields: VillageField[] = [
    {
        key: "cercle",
        label: "Cercle",
    },
    {
        key: "commune",
        label: "Commune",
    },
    {
        key: "region",
        label: "Region",
    },
    {
        key: "province",
        label: "Province",
    },
    {
        key: "population",
        label: "Population",
    },
    {
        key: "menage",
        label: "Menage",
    },

]

const VillageFull = () => {
    const closeVillage = useCloseVillage();
    const selectedVillage = useSelectedVillage();

    if (selectedVillage == undefined) {
        return null;
    }

    const { name, commune } = selectedVillage;

    return (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-50 z-10">
            <div className="w-full h-full relative py-5">
                <button
                    className="absolute top-5 right-5"
                    onClick={() => closeVillage()}
                >
                    <XCircleIcon className="text-gray-500" width={20} />
                </button>
                <h1 className="ml-5 text-lg font-bold">
                    {commune} - {name}
                </h1>
                <div className="flex flex-col gap-2 border-gray-900/5 border-t mt-4 max-h-full overflow-y-scroll">
                    <table className="min-w-full divide-y divide-x divide-gray-300 border-b border-gray-300">
                        <tbody className="divide-y divide-x divide-gray-200">
                        {fields.map(field => <tr className="divide-x" key={field.key}>
                        <td className="px-3 py-3.5 text-left text-sm font-semibold text-gray-9000">
                            {field.label}:
                        </td>
                        <td className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                            {selectedVillage[field.key]}
                        </td>
                    </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VillageFull;
