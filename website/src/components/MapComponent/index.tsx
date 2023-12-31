import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import MapVillages from "../MapVillages";
import { Map } from "leaflet";

type MapComponentProps = {
    villages: Village[];
    onSelect: (arg0: Village) => void;
    setMap: (arg0: Map) => void;
};
const MapComponent = ({ villages, onSelect, setMap }: MapComponentProps) => {
    return (
        <MapContainer
            preferCanvas={true}
            className="map"
            center={[31.1, -8.48]}
            zoom={7}
            minZoom={6}
            attributionControl={false}
            ref={setMap}
        >
            <TileLayer url="http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}"  subdomains={['mt0','mt1','mt2','mt3']} maxZoom={20} />

            <MarkerClusterGroup
                chunkedLoading
                maxClusterRadius={100}
                polygonOptions={{
                    smoothFactor: 0,
                    stroke: false,
                }}
                spiderfyOnMaxZoom={true}
            >
                <MapVillages villages={villages} onSelect={onSelect} />
            </MarkerClusterGroup>
        </MapContainer>
    );
};

export default MapComponent;
