import { Tag } from "primereact/tag";

const VillageAccessibility = (village: Village) => {
    return <Tag value={village?.accessible_road ? 'Oui' : 'Non'} severity={village?.accessible_road ? 'success' : 'danger'} />
}

export default VillageAccessibility;