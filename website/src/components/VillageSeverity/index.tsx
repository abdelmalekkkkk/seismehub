import { Tag } from "primereact/tag";

interface Severity {
    tag: "success" | "warning" | "danger";
    label: string;
}

const getSeverity = (severity: "LOW" | "MEDIUM" | "HIGH"): Severity => {
    switch (severity) {
        case "LOW":
            return {
                tag: 'success',
                label: "Faible"
            };
        case "MEDIUM":
            return {
                tag: 'warning',
                label: "Moyenne"
            };
        case "HIGH":
            return {
                tag: 'danger',
                label: "Haute"
            };
    }
}

const VillageSeverity = (village: Village) => {
    if (village.id == "") {
        return null;
    }
    const severity = getSeverity("LOW");
    return <Tag value={severity.label} severity={severity.tag} />
}

export default VillageSeverity;