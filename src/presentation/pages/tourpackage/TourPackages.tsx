import { useLocation } from "react-router";
import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";
import TourPackagesContent from "./sections/TourPackageContent";

const TourPackages = () => {
    const { state } = useLocation();
    const targetPackageTitle = state?.targetPackage || null;

    return (
        <div className='relative'>
            <NavigationBar />
            <ImageBannerStatic title="Paket Wisata" img="https://trv3-public.travelavina.com/assets/paket-wisata/paket-wisata-header.jpg" className=""/>
            <TourPackagesContent target={targetPackageTitle}/>
        </div>
    );
};

export default TourPackages;