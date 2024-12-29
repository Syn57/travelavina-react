import React from "react";
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ title, route }: { title: string; route: string }) => {
    const location = useLocation();
    const isActive = location.pathname === route;
  
    return (
      <div className="relative group">
        <Link
          className={`text-lg ${
            isActive ? "text-green-500" : "text-white"
          } group-hover:text-green-500 transition-colors duration-300 font-poppins text-sm`}
          to={route}>
          {title}
        </Link>
        <div
          className={`absolute left-0 bottom-0 h-[2px] ${
            isActive ? "w-full" : "w-0"
          } bg-green-500 group-hover:w-full transition-all duration-300`}
        ></div>
      </div>
    );
  };

export default NavItem;