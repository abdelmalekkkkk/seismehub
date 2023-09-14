import Map from "../../components/Map";
import { MapProvider } from "../../contexts/MapContext";

const Home = () => {
    return <div>
        <div className=" h-96 w-2"></div>
        <MapProvider>
            <Map />
        </MapProvider>
        <div className=" h-96 w-2"></div>
    </div>
}

export default Home;