type NeedTypeKey = "SANITATION_RECOVERY" | "NETWORK_RECOVERY" | "ELECTRICITY_RECOVERY" | "WATER_RECOVERY" | "ROAD_RECOVERY" | "MENTAL" | "TRANSPORT" | "COVER" | "FOOD" | "MEDICINE" | "EXTRACTION";

type NeedUrgency = "IMMEDIATE" | "MEDIUM" | "LOW";

type Need = {
    type: NeedTypeKey;
    details: string;
    name: string;
    id: string;
    quantity: number;
    verified: boolean;
    details: string;
    urgency: NeedUrgency;
    created: string;
}
