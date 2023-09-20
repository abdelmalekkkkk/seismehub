import "./index.css";
import { Button } from "primereact/button";
import Filter, { FilterState } from "../../filter";
import { createRef, useState } from "react";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Slider, SliderChangeEvent } from "primereact/slider";
import { useMapFilter, useNeedsTypes } from "../../contexts/MapContext";
import { DefaultFilterState } from "../../contexts/MapContext";
import {
    AutoComplete,
    AutoCompleteChangeEvent,
    AutoCompleteCompleteEvent,
} from "primereact/autocomplete";

type MapFilterProps = {
    filter: Filter;
    applyFilters: (state: FilterState) => void;
};


const MapFilter = ({ applyFilters }: MapFilterProps) => {
    const populationRef = createRef<HTMLSpanElement>();
    const menageRef = createRef<HTMLSpanElement>();
    const altitudeRef = createRef<HTMLSpanElement>();

    const needTypes = useNeedsTypes();
    const filter = useMapFilter();

    const [filterData, setFilterData] =
        useState<FilterState>(DefaultFilterState);
    const [communeSuggestions, setCommuneSuggestions] = useState<string[]>([]);
    const [provinceSuggestions, setProvinceSuggestions] = useState<string[]>(
        []
    );
    const [regionSuggestions, setRegionSuggestions] = useState<string[]>([]);

    const changeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterData((filterData) => ({
            ...filterData,
            term: e.target.value,
        }));
    };

    const changePopulation = (e: SliderChangeEvent) => {
        setFilterData((filterData) => ({
            ...filterData,
            population: e.value as [number, number],
        }));
    };

    const changeMenage = (e: SliderChangeEvent) => {
        setFilterData((filterData) => ({
            ...filterData,
            menage: e.value as [number, number],
        }));
    };

    const changeAltitude = (e: SliderChangeEvent) => {
        setFilterData((filterData) => ({
            ...filterData,
            altitude: e.value as [number, number],
        }));
    };

    const changeNeeds = (e: CheckboxChangeEvent) => {
        if (e.checked) {
            setFilterData((filterData) => ({
                ...filterData,
                needs: [...filterData.needs, e.value.key],
            }));
        } else {
            setFilterData((filterData) => ({
                ...filterData,
                needs: filterData.needs.filter(
                    (needType) => needType != e.value.key
                ),
            }));
        }
    };

    const changeField = (
        field: keyof FilterState,
        e: AutoCompleteChangeEvent
    ) => {
        setFilterData((filterData) => ({
            ...filterData,
            [field]: e.value,
        }));
    };

    const searchField = async (
        field: keyof FilterState,
        event: AutoCompleteCompleteEvent
    ) => {
        const results = await filter.suggestField(field, event.query);
        switch (field) {
            case "commune":
                setCommuneSuggestions(results);
                break
            case "province":
                setProvinceSuggestions(results);
                break
            case "region":
                setRegionSuggestions(results);
                break
        }
    };

    const reset = () => {
        setFilterData(DefaultFilterState);
        applyFilters(DefaultFilterState)
    }

    return (
        <div className="flex flex-col min-h-0 max-h-screen">
            <div className="px-4 mt-4">
                <h1 className="text-2xl font-medium tracking-tight text-gray-900">
                    Recherche
                </h1>
                <div className="flex justify-end">
                <Button size="small" className="!mr-2" onClick={() => reset()} outlined>Reset</Button>
                <Button size="small" onClick={() => applyFilters(filterData)}>
                    Appliquer
                </Button>
                </div>
            </div>
            <div className="px-4 mt-4 py-4 border-t border-gray-200 flex-grow flex flex-col gap-3 max-h-full overflow-y-scroll">
                <div>
                    <label className="text-sm font-medium">
                        Nom du village
                    </label>
                    <InputText
                        className=" p-inputtext-sm w-full !mt-2"
                        id="village_name"
                        placeholder="Entrez le nom"
                        onChange={changeTerm}
                    />
                </div>
                <div>
                    <label className="text-sm font-medium">
                        Population
                        <span
                            className="text-sm text-gray-500 ml-1"
                            ref={populationRef}
                        >
                            ({filterData.population[0]} -{" "}
                            {filterData.population[1]})
                        </span>
                    </label>
                    <div className="flex flex-col gap-2 mt-2">
                        <Slider
                            max={DefaultFilterState.population[1]}
                            onChange={changePopulation}
                            min={0}
                            value={filterData.population}
                            range
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium">
                        Meange
                        <span
                            className="text-sm text-gray-500 ml-1"
                            ref={menageRef}
                        >
                            ({filterData.menage[0]} - {filterData.menage[1]})
                        </span>
                    </label>
                    <div className="flex flex-col gap-2 mt-2">
                        <Slider
                            max={DefaultFilterState.menage[1]}
                            onChange={changeMenage}
                            min={0}
                            value={filterData.menage}
                            range
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium">Commune</label>
                    <div className="flex flex-col gap-2 mt-2">
                        <AutoComplete
                            className="w-full"
                            inputClassName="p-inputtext-sm w-full text-sm"
                            value={filterData.commune}
                            suggestions={communeSuggestions}
                            onChange={e => changeField("commune", e)}
                            completeMethod={e => searchField("commune", e)}
                            dropdown
                            forceSelection
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium">Région</label>
                    <div className="flex flex-col gap-2 mt-2">
                        <AutoComplete
                            className="w-full"
                            inputClassName="p-inputtext-sm w-full text-sm"
                            value={filterData.region}
                            suggestions={regionSuggestions}
                            onChange={e => changeField("region", e)}
                            completeMethod={e => searchField("region", e)}
                            dropdown
                            forceSelection
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium">Province</label>
                    <div className="flex flex-col gap-2 mt-2">
                        <AutoComplete
                            className="w-full"
                            inputClassName="p-inputtext-sm w-full text-sm !py-2"
                            value={filterData.province}
                            suggestions={provinceSuggestions}
                            onChange={e => changeField("province", e)}
                            completeMethod={e => searchField("province", e)}
                            dropdown
                            forceSelection
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium">
                        Altitude
                        <span
                            className="text-sm text-gray-500 ml-1"
                            ref={altitudeRef}
                        >
                            ({filterData.altitude[0]} -{" "}
                            {filterData.altitude[1]})
                        </span>
                    </label>
                    <div className="flex flex-col gap-2 mt-2">
                        <Slider
                            max={DefaultFilterState.altitude[1]}
                            onChange={changeAltitude}
                            min={0}
                            value={filterData.altitude}
                            range
                        />
                    </div>
                </div>
                <div>
                    <label className="text-sm font-medium">
                        Type de besoin
                    </label>
                    <div className="flex flex-col gap-2 mt-2">
                        {needTypes.map((option, index) => (
                            <div
                                className="flex items-center gap-3"
                                key={option.key}
                            >
                                <Checkbox
                                    inputId={`need-option-${index}`}
                                    onChange={changeNeeds}
                                    name="need"
                                    value={option}
                                    checked={
                                        filterData.needs.find(
                                            (needType) => needType == option.key
                                        ) != undefined
                                    }
                                />
                                <label
                                    className="text-sm cursor-pointer"
                                    htmlFor={`need-option-${index}`}
                                >
                                    {option.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapFilter;
