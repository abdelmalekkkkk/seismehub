import { MapContainer, TileLayer } from "react-leaflet";
import { Village } from "../../hooks/villages";
import MarkerClusterGroup from "react-leaflet-cluster";
import { memo } from "react";
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
            preferCanvas={false}
            className="map"
            center={[31.1, -8.48]}
            zoom={8}
            minZoom={8}
            attributionControl={false}
            ref={setMap}
        >
            <TileLayer url="https://api.mapbox.com/styles/v1/abdelmalekkkkk/clmfxe08901hq01r78isa90b0/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWJkZWxtYWxla2tra2siLCJhIjoiY2tyanR6OXV4MHZ4eTJvcGVyMWRqZDYwMiJ9.YfBWrfxMeRFkTq3EiJR7Hg" />

            <MarkerClusterGroup
                chunkedLoading
                maxClusterRadius={200}
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

export default memo(MapComponent);
