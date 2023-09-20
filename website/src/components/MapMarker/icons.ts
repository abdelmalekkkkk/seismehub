import L, { Icon } from 'leaflet';

import Cover from "../../assets/icons/Cover.svg";
import Extraction from "../../assets/icons/Extraction.svg";
import Medicine from "../../assets/icons/Medicine.svg";
import Network from "../../assets/icons/Network.svg";
import Sanitation from "../../assets/icons/Sanitation.svg";
import Water from "../../assets/icons/Water.svg";
import Electricity from "../../assets/icons/Electricity.svg";
import Food from "../../assets/icons/Food.svg";
import Mental from "../../assets/icons/Mental.svg";
import Road from "../../assets/icons/Road.svg";
import Transport from "../../assets/icons/Transport.svg";
import Generic from "../../assets/icons/Generic.svg";

const GenericIcon = new L.Icon({
    iconUrl: Generic,
    iconRetinaUrl: Generic,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
});

const CoverIcon = new L.Icon({
    iconUrl: Cover,
    iconRetinaUrl: Cover,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
});

const ExtractionIcon = new L.Icon({
    iconUrl: Extraction,
    iconRetinaUrl: Extraction,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
});

const MedicineIcon = new L.Icon({
    iconUrl: Medicine,
    iconRetinaUrl: Medicine,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
});

const NetworkIcon = new L.Icon({
    iconUrl: Network,
    iconRetinaUrl: Network,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
});

const SanitationIcon = new L.Icon({
    iconUrl: Sanitation,
    iconRetinaUrl: Sanitation,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
});

const WaterIcon = new L.Icon({
    iconUrl: Water,
    iconRetinaUrl: Water,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
});

const ElectricityIcon = new L.Icon({
    iconUrl: Electricity,
    iconRetinaUrl: Electricity,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
});

const FoodIcon = new L.Icon({
    iconUrl: Food,
    iconRetinaUrl: Food,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
});

const MentalIcon = new L.Icon({
    iconUrl: Mental,
    iconRetinaUrl: Mental,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
});

const RoadIcon = new L.Icon({
    iconUrl: Road,
    iconRetinaUrl: Road,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
});

const TransportIcon = new L.Icon({
    iconUrl: Transport,
    iconRetinaUrl: Transport,
    popupAnchor: [-0, -0],
    iconSize: [25, 30],
});

const getIcon = (village: Village): Icon => {
    if (village.needs.length == 0) {
        return GenericIcon;
    }

    const lastNeed = village.needs[village.needs.length - 1];

    switch(lastNeed.type) {
        case 'SANITATION_RECOVERY':
            return SanitationIcon;
        case 'NETWORK_RECOVERY':
            return NetworkIcon;
        case 'ELECTRICITY_RECOVERY':
            return ElectricityIcon;
        case 'WATER_RECOVERY':
            return WaterIcon;
        case 'ROAD_RECOVERY':
            return RoadIcon;
        case 'MENTAL':
            return MentalIcon;
        case 'TRANSPORT':
            return TransportIcon;
        case 'COVER':
            return CoverIcon;
        case 'FOOD':
            return FoodIcon;
        case 'MEDICINE':
            return MedicineIcon;
        case 'EXTRACTION':
            return ExtractionIcon;
    }

    return GenericIcon;
}

export {
    getIcon,
}