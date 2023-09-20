import { PropsWithChildren, RefObject, createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useGetVillages } from "../hooks/villages";
import { Map as LeafletMap } from "leaflet";
import Filter, { FilterState } from "../filter";
import { DataTable } from "primereact/datatable";
import { useGetNeedsTypes } from "../hooks/needs";

type MapContext = {
    villages: Village[];
    villagesMap: Map<string, Village>;
    selectedVillage?: Village;
    selectVillage: (village: Village) => void;
    panToVillage: (village: Village) => void;
    closeVillage: () => void;
    setMap: (map: LeafletMap) => void;
    setTable: (dataTable: RefObject<DataTable<Village[]> | undefined>) => void;
    applyFilters: (state: FilterState) => void;
    filter: Filter;
    needsTypes: NeedType[];
    addNeedToVillage: (villageID: string, need: Need) => void;
    addConvoyToVillage: (villageID: string, convoy: Convoy) => void;
};

const MapContext = createContext<MapContext|null>(null);

const DefaultFilterState: FilterState = {
    term: "",
    population: [0, 6000],
    menage: [0, 2000],
    altitude: [0, 2500],
    needs: [],
    province: "",
    region: "",
    commune: "",
    water_quality: "",
    accessbile_road: undefined,
}

const buildVillagesMap = (villages: Village[]): Map<string, Village> => {
    const map = new Map();

    for (let i = 0; i < villages.length; i++) {
        map.set(villages[i].id, villages[i]);
    }

    return map;
}

const MapProvider = ({ children }: PropsWithChildren) => {
    const { data } = useGetVillages();
    const { data: needsTypes } = useGetNeedsTypes();
    const [map, _setMap] = useState<LeafletMap>();
    const table = useRef<DataTable<Village[]>>();
    const [selectedVillage, setSelectedVillage] = useState<Village|undefined>();
    const [filteredVillages, setFilteredVillages] = useState<Village[]>(data ?? []);
    const [villagesMap, setVillagesMap] = useState<Map<string, Village>>(new Map());

    const lastState = useRef<FilterState>(DefaultFilterState)
    
    const filter = useMemo(() => {
        const filter = new Filter();
        filter.setup(data ?? []).then(() => {
            filter.search(DefaultFilterState).then(villages => {
                setFilteredVillages(villages);
            })
        });
        return filter;
    }, [data]);

    useEffect(() => {
        const newMap = buildVillagesMap(data ?? []);
        setVillagesMap(newMap);
    }, [data]);

    const _applyFilters = async (state: FilterState) => {
        lastState.current = state;
        const results = await filter.search(state);
        setFilteredVillages(results);
        map?.flyTo([31.1, -8.48], 8, {
            duration: 0.5,
        });
    }

    const applyFilters = useCallback(_applyFilters, [filter,map]);

    const _panToVillage = (village: Village) => {
        map?.flyTo([village.latitude, village.longitude], 18, {
            duration: 1
        });
    }

    const panToVillage = useCallback(_panToVillage, [map]);

    const _selectVillage = (village: Village) => {
        setSelectedVillage(currentVillage => {
            if (currentVillage == undefined || currentVillage.id != village.id) {
                return village;
            }

            return currentVillage;
        });
    };

    const selectVillage = useCallback(_selectVillage, []);

    const _closeVillage = () => {
        setSelectedVillage(undefined);
    }

    const closeVillage = useCallback(_closeVillage, []);

    const setMap = useCallback(_setMap, [_setMap]);

    const _setTable = (dataTable: RefObject<DataTable<Village[]> | undefined>) => {
        if (dataTable.current != null) {
            table.current = dataTable.current;
        }
    }

    const setTable = useCallback(_setTable, [_setTable]);

    const _addNeedToVillage = (villageID: string, need: Need) => {
        const newMap = new Map(villagesMap);
        const village = newMap.get(villageID);
        
        if (village == undefined) {
            return;
        }

        village.needs.push(need);

        newMap.set(villageID, village);
        setVillagesMap(newMap);
    }

    const addNeedToVillage = useCallback(_addNeedToVillage, [_addNeedToVillage]);

    const _addConvoyToVillage = (villageID: string, convoy: Convoy) => {
        const newMap = new Map(villagesMap);
        const village = newMap.get(villageID);
        
        if (village == undefined) {
            return;
        }

        village.convoys.push(convoy);

        newMap.set(villageID, village);
        setVillagesMap(newMap);
    }

    const addConvoyToVillage = useCallback(_addConvoyToVillage, [_addConvoyToVillage]);

    return <MapContext.Provider value={{
        selectedVillage,
        selectVillage,
        panToVillage,
        closeVillage,
        setMap,
        setTable,
        applyFilters,
        villagesMap,
        addNeedToVillage,
        addConvoyToVillage,
        villages: filteredVillages,
        filter,
        needsTypes: needsTypes ?? [],
    }}>
        {children}
    </MapContext.Provider>
};

const useSelectedVillage = () => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.selectedVillage;
}

const useSelectVillage = () => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.selectVillage;
}

const usePanToVillage = () => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.panToVillage;
}

const useCloseVillage = () => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.closeVillage;
}

const useVillages = () => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.villages;
}

const useSetMap = () => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.setMap;
}

const useSetTable = () => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.setTable;
}


const useApplyFilters = () => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.applyFilters;
}

const useMapFilter = () => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.filter;
}

const useNeedsTypes = () => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.needsTypes;
}

const useGetVillage = (id: string): Village | undefined => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.villagesMap.get(id);
}

const useAddNeedToVillage = () => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.addNeedToVillage;
}

const useAddConvoyToVillage = () => {
    const context = useContext(MapContext);

    if (context == null) {
        throw new Error("the map provider is not initialized");
    }

    return context.addConvoyToVillage;
}

export {
    MapProvider,
    useSelectedVillage,
    useSelectVillage,
    usePanToVillage,
    useCloseVillage,
    useVillages,
    useSetMap,
    useApplyFilters,
    useMapFilter,
    useSetTable,
    useNeedsTypes,
    useGetVillage,
    useAddNeedToVillage,
    useAddConvoyToVillage,
    DefaultFilterState
}