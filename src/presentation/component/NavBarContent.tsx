import { NavigationChipItemDomain } from "../../domain/model/assets/NavigationChipItemDomain";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import ic_menu from "../../assets/icons/ic_menu.svg";
import NavBarDropdown from "./NavBarDropdown";
import { getWcmsValue } from "../../utils/WcmsHelper";
import { WHATSAPP_LINK } from "../../utils/WcmsConstants";
import ic_phone from "../../assets/icons/ic_phone.svg";import { NAVBAR_HEIGHT, PAGE_WIDTH_CONFIG } from "../../utils/Constants";

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
        hoveredItem: string | null;
        setHoveredItem: (value: string | null) => void;
        navigationChips: NavigationChipItemDomain[];
        isMenuOpen: boolean;
        setIsMenuOpen: (value: boolean) => void;
}) => {
    if (navigationChips.length === 0) return null;

    return (
        <div className={`${isHomePage ? "bg-white/50 backdrop-blur-3xl" : "relative bg-gray-400"} w-full flex items-center justify-center`}>
            <div className={`flex ${PAGE_WIDTH_CONFIG}`}>
                <NavLogo className={`shrink-0 ${NAVBAR_HEIGHT}`} />

                {/* Mobile Menu Toggle */}
                {isOverflowing ? (
                    <div className="ml-auto place-self-center">
                        <button onClick={() => setIsMenuOpen(true)}>
                            <img src={ic_menu} alt="Menu Icon" />
                        </button>
                    </div>
                ) : (
                    <div className={`flex justify-between ml-auto ${NAVBAR_HEIGHT} items-center`}>
                        {navigationChips.map((item) => (
                            <div
                                key={item.title}
                                className="relative items-stretch"
                                onMouseEnter={() => setHoveredItem(item.route)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <NavItem 
                                    title={item.title} 
                                    route={item.route} 
                                    isHasChild={item.data.length !== 0} 
                                    isChildHovered={hoveredItem === item.route} 
                                    onClick={() => {}}
                                />
                                
                                {/* Dropdown menu */}
                                {item.data && hoveredItem === item.route && item.data.length !== 0 && (
                                    <NavBarDropdown 
                                        route={item.route} 
                                        childNav={item.data} 
                                        setHoveredItem={setHoveredItem}
                                        title={item.title} />
                                )}
                            </div>
                        ))}
                        <div className="text-white text-sm px-4">|</div>
                        <a href={getWcmsValue(WHATSAPP_LINK)} className="flex-shrink-0 items-center ps-4">
                            <img className="h-4 w-4" src={ic_phone} alt="Phone Icon" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBarContent;
