import { NavigationChipItemDomain } from "../../domain/model/assets/NavigationChipItemDomain";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import ic_menu from "../../assets/icons/ic_menu.svg";
import NavBarDropdown from "./NavBarDropdown";
import { useEffect, useState } from "react";
import { getWcmsValue } from "../../utils/WcmsHelper";
import { WHATSAPP_LINK } from "../../utils/WcmsConstants";
import ic_phone from "../../assets/icons/ic_phone.svg";

const NavBarContent = (
    {   
        isOverflowing, 
        isHomePage, 
        hoveredItem,
        setHoveredItem,
        navigationChips,
        isMenuOpen,
        setIsMenuOpen
    } : {
        isOverflowing: boolean;
        isHomePage: boolean;
        isHasChild: boolean;
        hoveredItem: string | null;
        setHoveredItem: (value: string | null) => void;
        navigationChips: NavigationChipItemDomain[];
        isMenuOpen: boolean;
        setIsMenuOpen: (value: boolean) => void;
}) => {

    const [waLink, setWaLink] = useState<string>("");

    useEffect(() => {
        getWcmsValue(WHATSAPP_LINK, setWaLink);
    });
    if (navigationChips.length === 0) return null;
    return (
        <>
            <div className={`${isHomePage ? "bg-white/50 backdrop-blur-3xl" : "relative bg-gray-400"} w-full flex items-center top-0 left-0 px-5 sm:px-10 lg:px-20 h-full`}>
                <NavLogo className="mr-auto shrink-0 h-[65px]" />
                {/* Mobile Menu Toggle */}
                {isOverflowing ? (
                    <div className="ml-auto">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <img src={ic_menu}/>
                        </button>
                    </div>
                ) : (
                    <div className="flex justify-between place-content-evenly ml-auto h-[65px] items-center">
                        {navigationChips.map((item) => (
                            <div
                                key={item.route}
                                className="relative items-stretch"
                                onMouseEnter={() => setHoveredItem(item.route)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <NavItem 
                                    title={item.title} 
                                    route={item.route} 
                                    isHasChild={item.data.length !== 0} 
                                    isChildHovered={hoveredItem === item.route} />
                                
                                {/* Dropdown menu */}
                                {item.data && hoveredItem === item.route && item.data.length !== 0 && (
                                    <NavBarDropdown 
                                        route={item.route} 
                                        childNav={item.data} 
                                        setHoveredItem={setHoveredItem} />
                                )}
                            </div>
                        ))}
                        <div className="text-white text-sm px-4">|</div>
                        <a
                            href={waLink}
                            className="text-white flex-shrink-0 items-center px-4"
                        >
                            <img className="h-4 w-4" src={ic_phone} alt="Phone Icon" />
                        </a>
                    </div>
                )}
            </div>
            {/* TODO: REFACTOR Expanded Mobile Menu */}
            {isOverflowing && isMenuOpen && (
                <div className="bg-white/50 bg-gray-400 w-full flex flex-col items-center py-4">
                    {navigationChips.map((item) => (
                        <NavItem 
                            key={item.route} 
                            title={item.title} 
                            route={item.route} 
                            isHasChild={item.data.length !== 0} 
                            isChildHovered={hoveredItem === item.route} />
                    ))}
                </div>
            )}
        </>
    );    
}

export default NavBarContent;
