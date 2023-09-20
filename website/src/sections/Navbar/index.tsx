import { ToggleButton } from "primereact/togglebutton";
import Logo from "../../assets/seismehub.webp";
import AddConvoy from "../../components/AddConvoy";
import AddNeed from "../../components/AddNeed";
import { useState } from "react";
import { Button } from "primereact/button";

const Navbar = () => {
    const [language, setLanguage] = useState("FR");

    const toggleLanguage = () => {
        setLanguage(language => language == "FR" ? "AR" : "FR");
    }
    
    return <div className="flex py-3 px-4 bg-white shadow  border-gray-200 sticky top-0 z-[1100]">
            <img src={Logo} className=" w-12" />
            <div className="flex-grow flex justify-end items-center">
            <div className="mr-4">
            <AddConvoy />
            </div>
            <div className="mr-4">
            <AddNeed />
            </div>
            <p onClick={toggleLanguage} className="text-sm text-indigo-800 hover:underline cursor-pointer">{language == "FR" ? "Français" : "العربية"}</p>
            </div>
    </div>
}

export default Navbar;