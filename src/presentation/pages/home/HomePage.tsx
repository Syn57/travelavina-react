import NavigationBar from "../../sections/NavigationBar";
import BannerSlider from "../../component/BannerSlider";
import SpotlightDestination from "../../sections/SpotlightDestination";
import HomepageCard from "../../sections/HompageCard";
import Testimoni from "../../sections/Testimoni";
import TourPackagesHomeSection from "../../sections/TourPackagesHomeSection";
import RecommendedPackage from "../../sections/RecommendedPackage";
import TourType from "../../sections/TourType";
import HolidayBenefit from "../../sections/HolidayBenefit";

const HomePage = () => {
    return (
        <div className="relative items-center justify-start">
            <NavigationBar />
            <BannerSlider />
            <SpotlightDestination />
            <HomepageCard />
            <Testimoni />
            <TourPackagesHomeSection />
            <RecommendedPackage />
            <TourType />
            <HolidayBenefit />
        </div>

    );
};

export default HomePage;