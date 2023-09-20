import { memo } from "react";
import { CircleMarker, Marker, Tooltip } from "react-leaflet";
import { getIcon } from "./icons";

type MapMarkerProps = {
    village: Village;
    onSelect: (v: Village) => void;
}

const MapMarker = ({ village, onSelect} : MapMarkerProps) => {
    return <Marker
    icon={getIcon(village)}
    key={village.id}
    position={[village.latitude, village.longitude]}    
    eventHandlers={{
        click: () => {
            onSelect(village);
        },
    }}>
        <Tooltip>{village.name}</Tooltip>
    </Marker>
}

export default memo(MapMarker);