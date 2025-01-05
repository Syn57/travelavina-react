import React from "react";
import navConfig from "../../configs/navigationChipBar.json"; 
import NavItem from "../NavItem";
import NavLogo from "../NavLogo";
import { useLocation } from "react-router-dom";
import ic_phone from "../../assets/icons/ic_phone.svg"
import { getWcmsValue } from "../../utils/WcmsHelper";
import { WHATSAPP_LINK } from "../../utils/WcmsConstants";

const NavigationBar = ({ className = "" }) => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    console.log(isHomePage);
    return (
        <nav className={`${className} w-full`}>
            <div className={`${isHomePage ? "absolute bg-white/50 z-20 backdrop-blur-lg" : "relative bg-gray-400"} w-full flex justify-center align-middle px-20 fixed top-0 left-0`}>
                <NavLogo className="mr-auto" />
                <div className="flex space-x-4 self-center justify-center">
                    {navConfig.map((item) => (
                        <NavItem key={item.route} title={item.title} route={item.route} />
                    ))}
                    <div className="self-center text-white text-sm">|</div>
                    <a href={getWcmsValue(WHATSAPP_LINK)} className="self-center text-white">
                        <img className="h-4 w-4" src={ic_phone}/>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;