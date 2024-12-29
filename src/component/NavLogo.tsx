import React from "react";
import logo from '../assets/images/logo.png'; 

const NavLogo = ({ className = "" }) => {
    console.log(logo)
    return (
        <div
            className={`flex self-start items-center bg-cover bg-center p-4 ${className}`}
            style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
        >
            <div className="flex-shrink-0">
                <img src={logo} alt="Logo" className="w-16 h-16" />
            </div>
            <div className="ml-4">
                <h1 className="text-white font-poppins text-2xl font-bold">TRAVELAVINA</h1>
            </div>
        </div>
    );
};

export default NavLogo;