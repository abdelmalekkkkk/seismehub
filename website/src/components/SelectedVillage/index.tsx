import { Dialog } from "primereact/dialog";
import {
    useCloseVillage,
    useSelectVillage,
    useSelectedVillage,
} from "../../contexts/MapContext";
import ModalNeeds from "../ModalNeeds";
import ModalConvoys from "../ModalConvoys";


const SelectedVillage = () => {
    const village = useSelectedVillage();
    const close = useCloseVillage();
    return (
        <Dialog
            visible={village != undefined}
            header={village?.name}
            onHide={() => close()}
            headerClassName="text-sm"
            dismissableMask={true}
            style={{
                width: "300px",
            }}
        >
            {village != undefined && <div className="grid grid-flow-row gap-2">
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Besoins</span>
                    <span className="text-sm text-gray-900 font-medium text-right"><ModalNeeds {...village} /></span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Convois</span>
                    <span className="text-sm text-gray-900 font-medium text-right"><ModalConvoys {...village} /></span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Commune</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.commune}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Région</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.region}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Province</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.province}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Population</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.population}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Ménage</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.menage}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Altitude</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.altitude}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Route praticable</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.accessible_road ? "Oui" : "Non"}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Type</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.type}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Milieu</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.area}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Qualité de l'eau</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.water_quality == "BAD" ? "Mauvaise" : "Bonne"}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Risque de glissement</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.risk_slip}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Risque d'inondation</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.risk_flood}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Risque froid</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.risk_cold}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Risque neige</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{village.risk_snow}</span>
                </div>
            </div>}
            
        </Dialog>
    );
};

export default SelectedVillage;
