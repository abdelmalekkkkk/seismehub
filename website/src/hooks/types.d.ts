interface NeedType {
    id: string;
    key: NeedTypeKey;
    name: string;
}

interface NeedTypeExpand {
    need_type: NeedType;
}

interface NeedResponse {
    id: string;
    quantity: number;
    verified: boolean;
    details: string;
    created: string;

    urgency: NeedUrgency;
    expand: NeedTypeExpand;
}

interface OrganizationResponse {
    id: string;
    name: string;
    phone: string;
    city: string;
}

interface FulfilledNeedsResponse {
    id: string;
    key: string;
    name: string;
}

interface ConvoyExpand {
    organization?: OrganizationResponse;
    fulfilled_needs: FulfilledNeedsResponse[];
}

interface ConvoyResponse {
    id: string;
    created: string;
    date: string;
    details: string;
    ngo_name: string;
    expand: ConvoyExpand;
}

interface Expand {
    "needs(village)"?: NeedResponse[];
    "convoys(village)"?: ConvoyResponse[];
}

interface VillageResponse extends Village {
    expand?: Expand;
}

interface AddNeed {
    village: string;
    need_type: string;
    quantity: number;
    details: string;
}

interface AddConvoy {
    village: string;
    ngo_name: string;
    fulfilled_needs: string[];
    date: string;
    details: string;
}