import React from "react";
import logo from '../assets/images/logo_travelavina.png'; 

const NavLogo = ({ className = "" }) => {
    console.log(logo)
    return (
        <div className={`flex self-start items-center bg-cover bg-center p-4 ${className}`}>
            <div className="flex">
                <img src={logo} alt="Logo" className="w-[132px] h-[38px]" />
            </div>
        </div>
    );
};

export default NavLogo;