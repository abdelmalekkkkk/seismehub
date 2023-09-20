import "./index.css";
import MapFilter from "../MapFilter";
import MapResults from "../MapResults";
import MapComponent from "../MapComponent";
import {
    useApplyFilters,
    useMapFilter,
    usePanToVillage,
    useSelectVillage,
    useSetMap,
    useSetTable,
    useVillages,
} from "../../contexts/MapContext";
import "leaflet/dist/leaflet.css";
import SelectedVillage from "../SelectedVillage";

const Map = () => {
    const villages = useVillages();
    const selectVillage = useSelectVillage();
    const panToVillage = usePanToVillage();
    const setMap = useSetMap();
    const filter = useMapFilter();
    const applyFilters = useApplyFilters();
    const setTable = useSetTable();

    return (
        <div className="grid grid-cols-12 border-t border-r rounded-lg m-10 border-t-gray-200 overflow-hidden bg-white">
            <div className="col-span-2 row-span-6 border-r border-l min-h-0 max-h-screen border-b border-gray-200">
                <MapFilter filter={filter} applyFilters={applyFilters} />
            </div>
            <div className="col-span-10 h-[800px]">
                <MapComponent
                    villages={villages}
                    onSelect={selectVillage}
                    setMap={setMap}
                />
            </div>
            <div className="col-span-10 h-[500px] border-l border-b rounded-bl-lg border-gray-100">
                <MapResults villages={villages} onSelect={selectVillage} onPan={panToVillage} setTable={setTable} />
            </div>
            <SelectedVillage />
        </div>
    );
};

export default Map;
