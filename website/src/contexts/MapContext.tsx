import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Village, useGetVillages } from "../hooks/villages";
import { Map } from "leaflet";
import Filter from "../filter";

type MapContext = {
    villages: Village[];
    selectedVillage?: Village;
    selectVillage: (village: Village) => void;
    closeVillage: () => void;
    setMap: (map: Map) => void;
    applyFilters: () => void;
    filter: Filter;
};

const MapContext = createContext<MapContext|null>(null);

const MapProvider = ({ children }: PropsWithChildren) => {
    const { data } = useGetVillages();
    const [map, _setMap] = useState<Map>();
    const [selectedVillage, setSelectedVillage] = useState<Village|undefined>();

    const [filteredVillages, setFilteredVillages] = useState<Village[]>(data ?? []);
   
    const filter = useMemo(() => {
        return new Filter({
            term: "",
            population: 500,
            helped: {
                label: "",
                id: "",
            },
            needs: [],
            level: {
                label: "",
                id: "",
            },
            villages: data ?? [],
        });
    }, [data])

    useEffect(() => {
        _applyFilters();
    }, [data]);

    const _applyFilters = () => {
        setFilteredVillages(filter.apply())
        console.log(filter);
    }

    const applyFilters = useCallback(_applyFilters, [filter]);

    const _selectVillage = (village: Village) => {
        setSelectedVillage(currentVillage => {
            if (currentVillage == undefined || currentVillage.id != village.id) {
                return village;
            }

            return currentVillage;
        });
    };

    useEffect(() => {
        if (selectedVillage == undefined) {
            return;
        }
        map?.flyTo([selectedVillage.latitude, selectedVillage.longitude], 18, {
            duration: 1
        });
    }, [selectedVillage, map]);

    const selectVillage = useCallback(_selectVillage, []);

    const _closeVillage = () => {
        setSelectedVillage(undefined);
    }

    const closeVillage = useCallback(_closeVillage, []);

    const setMapWrapper = (map: Map) => {
        _setMap(map);
    }

    const setMap = useCallback(setMapWrapper, []);

    return <MapContext.Provider value={{
        selectedVillage,
        selectVillage,
        closeVillage,
        setMap,
        applyFilters,
        villages: filteredVillages,
        filter,
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

export {
    MapProvider,
    useSelectedVillage,
    useSelectVillage,
    useCloseVillage,
    useVillages,
    useSetMap,
    useApplyFilters,
    useMapFilter,
}