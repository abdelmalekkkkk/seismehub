import "./index.css";
import MapFilter from "../MapFilter";
import MapResults from "../MapResults";
import MapComponent from "../MapComponent";
import { useApplyFilters, useMapFilter, useSelectVillage, useSetMap, useVillages } from "../../contexts/MapContext";
import VillageFull from "../VillageFull";
import "leaflet/dist/leaflet.css";


const Map = () => {
    const villages = useVillages();
    const selectVillage = useSelectVillage();
    const setMap = useSetMap();
    const filter = useMapFilter();
    const applyFilters = useApplyFilters();

    return (
        <div className="grid grid-cols-7 h-[1000px] border rounded-lg m-10 border-t-gray-200 overflow-hidden">
            <div className="col-span-3 border-r border-gray-200 min-h-0">
                <MapFilter filter={filter} applyFilters={applyFilters} />
            </div>
            <div className="col-span-4 max-h-full min-h-0">
                <MapComponent villages={villages} onSelect={selectVillage} setMap={setMap} />
            </div>
            <div className="col-span-7 min-h-0 relative border-t border-gray-200">
                <MapResults villages={villages} onSelect={selectVillage} />
                <VillageFull />
            </div>
        </div>
    );
};

export default Map;
