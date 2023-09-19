interface Convoy {
    id: string;
    created: string;
    date: string;
    details: string;
    ngo_name: string;
    ngo?: NGO;
    fulfilled_needs?: NeedType[];
}