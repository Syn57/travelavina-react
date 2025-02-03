import { useLocation } from "react-router-dom";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { NavigationChipItemDomain } from "../../domain/model/assets/NavigationChipItemDomain";
import container from "../../di/Modules";
import { AssetProviderRepository } from "../../domain/repositories/AssetProvideRepository";
import { TYPES } from "../../di/Types";
import { EVENT_LISTENER_RESIZE, MIN_WIDTH_NAVBAR } from "../../utils/Constants";
import NavBarContent from "../component/NavBarContent";

const NavigationBar = ({ className = "" }) => {
    const [navigationChips, setNavigationChips] = useState<NavigationChipItemDomain[]>([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const navRef = useRef() as MutableRefObject<HTMLDivElement>;
    const location = useLocation();
    const isHomePage = location.pathname === "/";

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

    return (
        <nav className={`${className} w-full`}>
            <div
                ref={navRef}
                className={`${isHomePage ? "absolute z-20 backdrop-blur-lg" : "relative bg-gray-400"} w-full`}
            >
                <NavBarContent
                    isOverflowing={isOverflowing}
                    isHomePage={isHomePage}
                    hoveredItem={hoveredItem}
                    setHoveredItem={setHoveredItem}
                    navigationChips={navigationChips}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen} 
                    isHasChild={false} />
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
