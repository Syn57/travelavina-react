import React from "react";
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ title, route }: { title: string; route: string }) => {
    const location = useLocation();
    const isActive = location.pathname === route;
  
    return (
      <div className="relative group">
        <Link
          className={`text-lg ${
            isActive ? "text-[#3B28E0]" : "text-white"
          } group-hover:text-[#3B28E0] transition-colors duration-300 font-poppins text-base font-bold`}
          to={route}>
          {title}
        </Link>
        {/* <div
          className={`absolute left-0 bottom-0 h-[2px] ${
            isActive ? "w-full" : "w-0"
          } bg-[#3B28E0] group-hover:w-full transition-all duration-300`}
        ></div> */}
      </div>
    );
  };

export default NavItem;