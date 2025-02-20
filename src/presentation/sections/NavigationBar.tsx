import { useLocation, useNavigate } from "react-router-dom";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { NavigationChipItemDomain } from "../../domain/model/assets/NavigationChipItemDomain";
import container from "../../di/Modules";
import { AssetProviderRepository } from "../../domain/repositories/AssetProvideRepository";
import { TYPES } from "../../di/Types";
import { EVENT_LISTENER_RESIZE, MIN_WIDTH_NAVBAR } from "../../utils/Constants";
import NavBarContent from "../component/NavBarContent";
import ic_dropdown_white from '../../assets/icons/ic_chevron_dropdown_white.svg';
import ic_dropdown_blue from '../../assets/icons/ic_chevron_dropdown_blue.svg';
import ic_close from "../../assets/icons/ic_cross_white.svg";
import NavLogo from "../component/NavLogo";

const NavigationBar = ({ className = "" }) => {
    const [navigationChips, setNavigationChips] = useState<NavigationChipItemDomain[]>([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const navRef = useRef() as MutableRefObject<HTMLDivElement>;
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [activeRouteDrawer, setActiveRouteDrawer] = useState<string|null>(null);
    // Manage which menus are open
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
    
    const toggleMenu = (route: string) => {
        setOpenMenus(prev => ({ ...prev, [route]: !prev[route] }));
    };


    useEffect(() => {
        getNavbarChips(setNavigationChips);
        const checkOverflow = () => {
            if (navRef.current) {
                const isOverflow = navRef.current.clientWidth < MIN_WIDTH_NAVBAR;
                setIsOverflowing(isOverflow);
                if (!isOverflowing) setIsMenuOpen(false);
            }
        };
        checkOverflow();
        window.addEventListener(EVENT_LISTENER_RESIZE, checkOverflow);
        return () => {
            window.removeEventListener(EVENT_LISTENER_RESIZE, checkOverflow);
        };
    });

    if(navigationChips.length === 0) return null;

    return (
        <nav className={`${className} w-full`}>
            <div
                ref={navRef}
                className={`${isHomePage ? "absolute z-20 backdrop-blur-sm" : "relative bg-gray-400"} w-full flex items-center justify-center`}
            >
                <NavBarContent
                    isOverflowing={isOverflowing}
                    isHomePage={isHomePage}
                    hoveredItem={hoveredItem}
                    setHoveredItem={setHoveredItem}
                    navigationChips={navigationChips}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen} 
                    />
            </div>

            {/* Mobile Nav Drawer */}
            <div className={`fixed top-0 left-0 h-full w-72 bg-slate-400 shadow-xl z-[500] transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <NavLogo />
                    <button onClick={() => setIsMenuOpen(false)} className="self-start mt-5">
                        <img src={ic_close} alt="Close Icon" className="h-3 w-3" />
                    </button>
                </div>

                {/* Scrollable Navigation */}
                <nav className="px-4 overflow-y-auto max-h-[calc(100vh-60px)] mt-5">
                    {navigationChips.map((item) => (
                        <div key={item.route} 
                            className="mb-1"
                        >
                            <NavDrawerItem 
                                title={item.title} 
                                route={item.route} 
                                isParent={true}
                                isHovered={activeRouteDrawer === item.title} 
                                isHasChild={item.data.length !== 0} 
                                isOpen={openMenus[item.route] || false} 
                                onClick={() => toggleMenu(item.route)}
                                onMouseEnter={() => setActiveRouteDrawer(item.title)}
                                onMouseLeave={() => setActiveRouteDrawer(null)}
                            />

                            {/* Sub-menu (only shows when clicked) */}
                            {openMenus[item.route] && item.data.length > 0 && (
                                <div className="ml-4 transition-all duration-300">
                                    {item.data.map(subItem => (
                                        <NavDrawerItem 
                                            isParent={false}
                                            key={subItem.route} 
                                            title={subItem.title} 
                                            route={subItem.route} 
                                            isHovered={activeRouteDrawer === subItem.title} 
                                            isHasChild={false} 
                                            isOpen = {false}
                                            onMouseEnter={() => setActiveRouteDrawer(subItem.title)}
                                            onMouseLeave={() => setActiveRouteDrawer(null)}
                                            onClick={() => setIsMenuOpen(false)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Background Overlay */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}

        </nav>
    );
};

const NavDrawerItem = ({ 
    title, 
    route, 
    isHasChild,
    isParent,
    isHovered, 
    isOpen, 
    onClick,
    onMouseEnter,
    onMouseLeave 
}: { 
  title: string, 
  route: string, 
  isHasChild: boolean, 
  isParent: boolean,
  isHovered: boolean,
  isOpen: boolean,
  onClick: () => void 
  onMouseEnter: () => void
  onMouseLeave: () => void
}) => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route)
  };

  return (
    <div 
        className="relative group flex flex-col h-10"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
      <button 
        className={`text-md ${isHovered ? "text-primary" : "text-white"} transition-colors duration-300 font-bold flex items-center justify-between px-4 w-full`}
        onClick={isParent && isHasChild ? onClick : handleClick}
      >
        <span>{title}</span>
        {isHasChild && (
          <div className='relative ms-1 w-4 h-4 flex items-center justify-center mt-1'>
            <img
              src={ic_dropdown_white}
              className={`absolute inset-0 transition-opacity duration-700 ${isHovered? "opacity-0" : "opacity-100"} place-self-center`}
            />
            <img
              src={ic_dropdown_blue}
              className={`absolute inset-0 transition-opacity duration-700 ${isHovered? "opacity-100" : "opacity-0"} place-self-center`}
            />
          </div>
          
        )}
      </button>
    </div>
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
