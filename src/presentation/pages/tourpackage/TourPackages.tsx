import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";
import TourPackagesContent from "../../sections/TourPackageContent";

const TourPackages = () => {
    return (
        <div className='relative'>
            <NavigationBar />
            <ImageBannerStatic title="Paket Wisata" img="src/assets/images/slider-banner-3.jpg" className=""/>
            <TourPackagesContent />
        </div>
    );
};

export default TourPackages;