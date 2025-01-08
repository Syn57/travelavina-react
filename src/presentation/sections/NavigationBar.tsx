import { useLocation } from "react-router-dom";
import ic_phone from "../../assets/icons/ic_phone.svg"
import NavLogo from "../component/NavLogo";
import NavItem from "../component/NavItem";
import { getWcmsValue } from "../../utils/WcmsHelper";
import { WHATSAPP_LINK } from "../../utils/WcmsConstants";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { NavigationChipItemDomain } from "../../domain/model/assets/NavigationChipItemDomain";
import container from "../../di/Modules";
import { AssetProviderRepository } from "../../domain/repositories/AssetProvideRepository";
import { TYPES } from "../../di/Types";

const NavigationBar = ({ className = "" }) => {
    const [navigationChips, setNavigationChips] = useState<NavigationChipItemDomain[]>([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const navRef = useRef() as MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        getNavbarChips(setNavigationChips);

        // Check for overflow
        const checkOverflow = () => {
            if (navRef.current) {
                const isOverflow =
                    navRef.current.scrollWidth > navRef.current.clientWidth; // Check if content is overflowing
                setIsOverflowing(isOverflow);
                console.log(`scrollwidth: ${navRef.current.scrollWidth}`)
                console.log(`clientWidth: ${navRef.current.clientWidth}`)
                console.log(`logic: ${navRef.current.scrollWidth >= navRef.current.clientWidth}`)
            }
        };

        // Check overflow on load and resize
        checkOverflow();
        window.addEventListener("resize", checkOverflow);

        return () => {
            window.removeEventListener("resize", checkOverflow);
        };
    }, []);

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <nav className={`${className} w-full`}>
            <div
                ref={navRef} // Attach the ref to the navigation container
                className={`${
                    isHomePage ? "absolute bg-white/50 z-20 backdrop-blur-lg" : "relative bg-gray-400"
                } w-full flex items-center px-20 fixed top-0 left-0`}
            >
                <NavLogo className="mr-auto shrink-0" />

                {/* Mobile Menu Toggle */}
                {isOverflowing ? (
                    <div className="ml-auto">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {/* Menu Icon */}
                            <div className="space-y-1">
                                <div className="w-6 h-0.5 bg-white"></div>
                                <div className="w-6 h-0.5 bg-white"></div>
                                <div className="w-6 h-0.5 bg-white"></div>
                            </div>
                        </button>
                    </div>
                ) : (
                    <div className="flex space-x-4 items-center justify-center ml-auto">
                        {navigationChips.map((item) => (
                            <NavItem key={item.route} title={item.title} route={item.route} />
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
                <div className="bg-gray-400 w-full flex flex-col items-center py-4">
                    {navigationChips.map((item) => (
                        <NavItem key={item.route} title={item.title} route={item.route} />
                    ))}
                    <a
                        href={getWcmsValue(WHATSAPP_LINK)}
                        className="text-white flex-shrink-0 items-center mt-4"
                    >
                        <img className="h-4 w-4" src={ic_phone} alt="Phone Icon" />
                    </a>
                </div>
            )}
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
