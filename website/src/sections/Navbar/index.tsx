import Logo from "../../assets/seismehub.webp";
import AddNeed from "../../components/AddNeed";

const Navbar = () => {
    return <div className="flex py-3 px-4 bg-white shadow  border-gray-200">
            <img src={Logo} className=" w-12" />
            <div className="flex-grow flex justify-end">
                <AddNeed />
            </div>
    </div>
}

export default Navbar;