import "./index.css";
import MapFilter from "../MapFilter";
import MapResults from "../MapResults";
import MapComponent from "../MapComponent";
import {
    useApplyFilters,
    useMapFilter,
    useSelectVillage,
    useSetMap,
    useSetTable,
    useVillages,
} from "../../contexts/MapContext";
import "leaflet/dist/leaflet.css";

const Map = () => {
    const villages = useVillages();
    const selectVillage = useSelectVillage();
    const setMap = useSetMap();
    const filter = useMapFilter();
    const applyFilters = useApplyFilters();
    const setTable = useSetTable();

    return (
        <div className="grid grid-cols-9 grid-rows-6 md:h-[90vh] border rounded-lg m-10 border-t-gray-200 overflow-hidden bg-white">
            <div className="col-span-2 row-span-6 border-r border-gray-200 min-h-0 h-full">
                <MapFilter filter={filter} applyFilters={applyFilters} />
            </div>
            <div className="col-span-7 row-span-3">
                <MapComponent
                    villages={villages}
                    onSelect={selectVillage}
                    setMap={setMap}
                />
            </div>
            <div className="col-span-7 row-span-3">
                <MapResults villages={villages} onSelect={selectVillage} setTable={setTable} />
            </div>
        </div>
    );
};

export default Map;
