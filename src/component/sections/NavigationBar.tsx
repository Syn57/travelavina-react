import React from "react";
import navConfig from "../../configs/navigationChipBar.json"; 
import NavItem from "../NavItem";
import NavLogo from "../NavLogo";
import { useLocation } from "react-router-dom";

const NavigationBar = ({ className = "" }) => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    console.log(isHomePage);
    return (
        <nav className={`${className} w-full`}>
            <div className={`${isHomePage ? "absolute bg-transparent z-20" : "relative bg-slate-950"} w-full flex justify-center align-middle px-20 fixed top-0 left-0`}>
                <NavLogo className="mr-auto" />
                <div className="flex space-x-4 self-center justify-self-end ml-auto">
                    {navConfig.map((item) => (
                        <NavItem key={item.route} title={item.title} route={item.route} />
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;