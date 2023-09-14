import { Button, Checkbox, Label, Radio, RangeSlider, TextInput } from "flowbite-react";
import Filter from "../../filter";
import { createRef } from "react";

const needsOptions: NeedOption[] = [
    {id: "", label: "Tout"},
    {id: "", label:"Extraction des victimes sous les décombes"},
    {id: "", label:"Nourriture"},
    {id: "", label:"Médicaments"},
    {id: "", label:"Couvertures, vêtements, ustensiles..."},
    {id: "", label:"Transport"},
    {id: "", label:"Soutien psychologique"},
    {id: "", label:"Libération d'accès routiers"},
    {id: "", label:"Réhabilitation Eau"},
    {id: "", label:"Réhabilitation Electricité"},
    {id: "", label:"Réhabilitation Réseau Mobile"},
    {id: "", label:"Réhabilitation Asssinissement"},
];

const helpedOptions: HelpedOption[] = [
    {id: "", label: "Non"},
    {id: "", label: "Oui"},
]

const levelsOptions: LevelOption[] = [
    {
        id: "",
        label: "Très sévère",
    },
    {
        id: "",
        label: "Assez dégradée",
    },
    {
        id: "",
        label: "Modérée",
    },
];

type MapFilterProps = {
    filter: Filter;
    applyFilters: () => void;
}

const MapFilter = ({ filter, applyFilters }: MapFilterProps) => {
    const populationRef = createRef<HTMLSpanElement>();

    const changeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        filter.term = e.target.value;
    }

    const changePopulation = (e: React.ChangeEvent<HTMLInputElement>) => {
        filter.population = parseInt(e.target.value);
        if (populationRef.current != undefined) {
            populationRef.current.innerText = e.target.value;
        }
    }

    return <div className="flex flex-col min-h-0 max-h-full">
        <div className="flex justify-between px-4 mt-4 items-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Recherche</h1>
            <Button size="xs" onClick={() => applyFilters()}>Appliquer</Button>
        </div>
        <div className="px-4 mt-4 py-4 border-t border-gray-200 flex-grow flex flex-col gap-3 max-h-full overflow-y-scroll">
            <div>
                <Label className="text-sm">
                    Nom du village
                </Label>
                <TextInput
                className="mt-2"
                    id="village_name"
                    placeholder="Entrez le nom"
                    onChange={changeTerm}
                />
            </div>
            <div>
                <Label className="text-sm">
                    Population
                    <span className="text-sm text-gray-500 ml-1" ref={populationRef}>(500)</span>
                </Label>
                <div className="flex flex-col gap-2 mt-2">
                    <RangeSlider max={5000} onChange={changePopulation} defaultValue={500} />
                </div>
            </div>
            <div>
                <Label className="text-sm">
                    Aide deja recu
                </Label>
                <div className="flex flex-col gap-2 mt-2">
                    {helpedOptions.map((option, index) => <div className="flex items-center gap-3" key={index}>
                        <Radio id={`helped-option-${index}`} name="helped" />
                        <Label htmlFor={`helped-option-${index}`} value={option.label} />
                    </div>)}
                </div>
            </div>
            <div>
                <Label className="text-sm">
                    Type de besoin
                </Label>
                <div className="flex flex-col gap-2 mt-2">
                    {needsOptions.map((option, index) => <div className="flex items-center gap-3" key={index}>
                        <Checkbox id={`need-option-${index}`} name="need" />
                        <Label htmlFor={`need-option-${index}`} value={option.label} />
                    </div>)}
                </div>
            </div>
            <div>
                <Label className="text-sm">
                    Severité
                </Label>
                <div className="flex flex-col gap-2 mt-2">
                    {levelsOptions.map((option, index) => <div className="flex items-center gap-3" key={index}>
                        <Checkbox id={`level-option-${index}`} name="level" />
                        <Label htmlFor={`level-option-${index}`} value={option.label} />
                    </div>)}
                </div>
            </div>
        </div>

    </div>
}

export default MapFilter;