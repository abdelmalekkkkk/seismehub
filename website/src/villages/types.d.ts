interface Village {
    id: string;
    created: string;
    updated: string;
    needs: Need[];
    needs_keys: NeedTypeKey[];
    convoys: Convoy[];
    latitude:        number;
    longitude:       number;
    population:      number;
    name:            string;
    name_ar:         string;
    region:          string;
    region_ar:       string;
    province_ar:     string;
    province:        string;
    commune_ar:      string;
    commune:         string;
    type:            string;
    menage:          number;
    accessible_road: boolean;
    area:            string;
    altitude:        number;
    water_quality:   "GOOD" | "BAD";
    risk_slip:       number;
    risk_flood:      number;
    risk_cold:       number;
    risk_snow:       number;
    has_water_table: boolean;
    internal_id:     string;
}

type VillageName  = {
    name: string;
    id: string;
}