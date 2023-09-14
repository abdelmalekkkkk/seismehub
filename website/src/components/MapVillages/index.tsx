import { memo } from "react"
import { Village } from "../../hooks/villages"
import { CircleMarker } from "react-leaflet";

type MapVillagesProps = {
    villages: Village[];
    onSelect: (village: Village) => void;
}

const MapVillages = ({ villages, onSelect } : MapVillagesProps) => {
    return <>
        {villages.map((village) => (
                    <CircleMarker
                        className="marker"
                        key={village.id}
                        center={[village.latitude, village.longitude]}
                        color="#e54d2e"
                        fillOpacity={0.3}
                        radius={8}
                        eventHandlers={{
                            click: () => {
                                onSelect(village);
                            },
                        }}
                    />
                ))}
    </>
}

export default memo(MapVillages);