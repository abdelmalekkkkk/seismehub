import MapMarker from "../MapMarker";

type MapVillagesProps = {
    villages: Village[];
    onSelect: (village: Village) => void;
};

const MapVillages = ({ villages, onSelect }: MapVillagesProps) => {
    return (
        <>
            {villages.map((village) => (
                <MapMarker
                    key={village.id}
                    village={village}
                    onSelect={onSelect}
                />
            ))}
        </>
    );
};

export default MapVillages;
