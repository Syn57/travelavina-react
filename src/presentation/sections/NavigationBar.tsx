import { useLocation } from "react-router-dom";
import ic_phone from "../../assets/icons/ic_phone.svg"
import NavLogo from "../component/NavLogo";
import NavItem from "../component/NavItem";
import { getWcmsValue } from "../../utils/WcmsHelper";
import { WHATSAPP_LINK } from "../../utils/WcmsConstants";
import { useEffect, useState } from "react";
import { NavigationChipItemDomain } from "../../domain/model/assets/NavigationChipItemDomain";
import container from "../../di/Modules";
import { AssetProviderRepository } from "../../domain/repositories/AssetProvideRepository";
import { TYPES } from "../../di/Types";

const NavigationBar = ({ className = "" }) => {
    const [navigationChips, setNavigationChips] = useState<NavigationChipItemDomain[]>([]);
    useEffect(() => {
        getNavbarChips(setNavigationChips);
    }, []);
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    console.log(isHomePage);
    return (
        <nav className={`${className} w-full`}>
            <div className={`${isHomePage ? "absolute bg-white/50 z-20 backdrop-blur-lg" : "relative bg-gray-400"} w-full flex justify-center items-center px-20 fixed top-0 left-0`}>
                <NavLogo className="mr-auto shrink-0" />
                <div className="flex space-x-4 items-center justify-center">
                    {navigationChips.map((item) => (
                        <NavItem key={item.route} title={item.title} route={item.route} />
                    ))}
                    <div className="text-white text-sm">|</div>
                    <a href={getWcmsValue(WHATSAPP_LINK)} className="text-white flex-shrink-0 items-center">
                        <img className="h-4 w-4" src={ic_phone} alt="Phone Icon" />
                    </a>
                </div>
            </div>
        </nav>
    );
};


const getNavbarChips = async (onFinishFetchAction : (arg0: NavigationChipItemDomain[]) => void) => {
    const repository = container.get<AssetProviderRepository>(TYPES.AssetProviderRepository);
    const data = await repository.getNavigationbarAssets();
    onFinishFetchAction(data);
};

export default NavigationBar;
