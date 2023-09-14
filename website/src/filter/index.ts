import { Village } from "../hooks/villages";
import Fuse from 'fuse.js'


type FilterState = {
    term: string;
    population: number;
    helped: HelpedOption;
    needs: NeedOption[];
    level: LevelOption;
    villages: Village[]
};

class Filter {
    term: string;
    population: number;
    helped: HelpedOption;
    needs: NeedOption[];
    level: LevelOption;
    villages: Village[];
    index: Fuse<Village>;

    constructor({
        term,
        population,
        helped,
        needs,
        level,
        villages
    }: FilterState) {
        this.term = term;
        this.population = population;
        this.helped = helped;
        this.needs = needs;
        this.level = level;
        this.villages = villages;
        this.index = new Fuse<Village>(
            villages,
            {
                keys: ["name", "region", "province", "cercle"]
            }
        )
    }

    apply(): Village[] {
        const villages = this.term == "" ? this.villages : this.index.search(this.term).map(result => result.item);
        return villages.filter(village => {
            if (village.population > this.population) {
                return false;
            }
            return true;
        })
    }
}

export default Filter;
export type { FilterState };