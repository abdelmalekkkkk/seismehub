import { Orama, create, search, insertMultiple } from "@orama/orama";

type FilterState = {
    term: string;
    population: [number,number];
    menage: [number,number];
    altitude: [number,number];
    needs: NeedTypeKey[];
    commune: string;
    region: string;
    province: string;
    accessbile_road?: boolean;
    water_quality: string;
};

type SearchParams = {
    needs_keys?: NeedTypeKey[];
    population: {
        between: [number, number]
    }
}

class Filter {
    index?: Orama;

    constructor() {
        
    }

    async setup(villages: Village[]) {
        const db = await create({
            schema: {
                name: 'string',
                commune: 'string',
                province: 'string',
                region: 'string',
                needs_keys: 'string[]',
                population: 'number',
                accessuible_road: 'boolean',
                water_quality: 'string',
            }
        });

        await insertMultiple(db, villages as []);

        this.index = db;
    }

    async search(state: FilterState): Promise<Village[]> {
        if (this.index == undefined) {
            return [];
        }

        const where: SearchParams = {
            population: {
                between: state.population,
            }
        };

        if (state.needs.length > 0) {
            where.needs_keys = state.needs
        }

        const results = await search(this.index, {
            term: state.term,
            limit: 10000,
            where
        });

        return results.hits.map(result => result.document as unknown as Village)
    }

    async suggest(query: string): Promise<VillageName[]> {
        if (this.index == undefined) {
            return [];
        }
        const results = await search(this.index, { term: query, properties: ['name'], limit: 10000 });
        return results.hits.map(result => ({
            id: result.document.id as string,
            name: result.document.name as string,
        }));
    }

    async suggestField(field: keyof FilterState, query: string): Promise<string[]> {
        if (this.index == undefined) {
            return [];
        }
        const results = await search(this.index, { term: query, properties: [field], limit: 10000 });
        const values = new Set(results.hits.map(result => result.document[field] as string));
        return Array.from(values);
    }


}

export default Filter;
export type { FilterState };