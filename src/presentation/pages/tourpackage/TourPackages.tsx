import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";
import TourPackagesContent from "./sections/TourPackageContent";

const TourPackages = () => {
    return (
        <div className='relative'>
            <NavigationBar />
            <ImageBannerStatic title="Paket Wisata" img="https://trv3-public.travelavina.com/assets/paket-wisata/paket-wisata-header.jpg" className=""/>
            <TourPackagesContent />
        </div>
    );
};

export default TourPackages;