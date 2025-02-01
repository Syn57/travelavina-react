import { useLocation } from "react-router-dom";
import ic_phone from "../../assets/icons/ic_phone.svg";
import ic_menu from "../../assets/icons/ic_menu.svg";
import NavLogo from "../component/NavLogo";
import NavItem from "../component/NavItem";
import { getWcmsValue } from "../../utils/WcmsHelper";
import { WHATSAPP_LINK } from "../../utils/WcmsConstants";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { NavigationChipItemDomain } from "../../domain/model/assets/NavigationChipItemDomain";
import container from "../../di/Modules";
import { AssetProviderRepository } from "../../domain/repositories/AssetProvideRepository";
import { TYPES } from "../../di/Types";
import { EVENT_LISTENER_RESIZE, MIN_WIDTH_NAVBAR } from "../../utils/Constants";

const NavigationBar = ({ className = "" }) => {
    const [navigationChips, setNavigationChips] = useState<NavigationChipItemDomain[]>([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null); // State for hover

    const navRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        getNavbarChips(setNavigationChips);
        const checkOverflow = () => {
            if (navRef.current) {
                const isOverflow = navRef.current.clientWidth < MIN_WIDTH_NAVBAR;
                setIsOverflowing(isOverflow);
            }
        };
        checkOverflow();
        window.addEventListener(EVENT_LISTENER_RESIZE, checkOverflow);
        return () => {
            window.removeEventListener(EVENT_LISTENER_RESIZE, checkOverflow);
        };
    }, []);

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <nav className={`${className} w-full`}>
            <div
                ref={navRef}
                className={`${isHomePage ? "absolute z-20 backdrop-blur-lg" : "relative bg-gray-400"} w-full`}
            >
                <div className={`${isHomePage ? "bg-white/50 backdrop-blur-3xl" : "relative bg-gray-400"} w-full flex items-center top-0 left-0 px-5 sm:px-10 lg:px-20 h-full`}>
                    <NavLogo className="mr-auto shrink-0" />

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
                        <div className="flex space-x-4 items-center justify-center ml-auto h-full">
                            {navigationChips.map((item) => (
                                <div
                                    key={item.route}
                                    className="relative group h-full"
                                    onMouseEnter={() => setHoveredItem(item.route)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    <NavItem title={item.title} route={item.route} />
                                    
                                    {/* Dropdown menu */}
                                    {item.data && hoveredItem === item.route && item.data.length !== 0 && (
                                        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
                                            {item.data.map((sub) => (
                                                <a
                                                    key={sub.route}
                                                    href={sub.route}
                                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                >
                                                    {sub.title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="text-white text-sm">|</div>
                            <a
                                href={getWcmsValue(WHATSAPP_LINK)}
                                className="text-white flex-shrink-0 items-center"
                            >
                                <img className="h-4 w-4" src={ic_phone} alt="Phone Icon" />
                            </a>
                        </div>
                    )}
                </div>
                {/* Expanded Mobile Menu */}
                {isOverflowing && isMenuOpen && (
                    <div className="bg-white/50 bg-gray-400 w-full flex flex-col items-center py-4">
                        {navigationChips.map((item) => (
                            <NavItem key={item.route} title={item.title} route={item.route} />
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};


const getNavbarChips = async (
    onFinishFetchAction: (arg0: NavigationChipItemDomain[]) => void
) => {
    const repository = container.get<AssetProviderRepository>(TYPES.AssetProviderRepository);
    const data = await repository.getNavigationbarAssets();
    onFinishFetchAction(data);
};


export default NavigationBar;
