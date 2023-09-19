import { Orama, create, search, insertMultiple } from "@orama/orama";

type FilterState = {
    term: string;
    population: [number,number];
    menage: [number,number];
    altitude: [number,number];
    needs: NeedTypeKey[];
    commune?: string;
    region?: string;
    province?: string;
    accessbile_road?: boolean;
    water_quality: string;
};

type SearchParams = {
    commune?: string;
    region?: string;
    province?: string;
    needs_keys?: NeedTypeKey[];
    population: {
        between: [number, number]
    };
    menage: {
        between: [number, number]
    };
    altitude: {
        between: [number, number]
    };
}

type Schema = {
    readonly name: "string";
    readonly commune: "string";
    readonly province: "string";
    readonly region: "string";
    readonly needs_keys: "string[]";
    readonly population: "number";
    readonly menage: "number";
    readonly altitude: "number";
    readonly accessuible_road: "boolean";
    readonly water_quality: "string";
};

class Filter {
    index?: Orama<Schema>;

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
                menage: 'number',
                altitude: 'number',
                accessuible_road: 'boolean',
                water_quality: 'string',
            },
            components: {
                tokenizer: {
                    stemming: false,
                }
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
            },
            menage: {
                between: state.menage,
            },
            altitude: {
                between: state.altitude,
            },
        };

        if (state.needs.length > 0) {
            where.needs_keys = state.needs
        }

        if (state.commune != "") {
            where.commune = state.commune
        }

        if (state.region != "") {
            where.region = state.region
        }

        if (state.province != "") {
            where.province = state.province
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