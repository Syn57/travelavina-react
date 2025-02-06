import NavigationBar from "../../sections/NavigationBar";
import BannerSlider from "../../component/BannerSlider";
import PopularDestination from "./sections/PopularDestination";
import HomepageCard from "./sections/HomepageCard";
import TourPackagesHomeSection from "./sections/TourPackagesHomeSection";
import RecommendedPackage from "./sections/RecommendedPackage";
import TourType from "./sections/TourType";
import HolidayBenefit from "./sections/HolidayBenefit";
import Testimoni from "./sections/Testimoni";

const HomePage = () => {
    return (
        <div className="relative items-center justify-start">
            <NavigationBar />
            <BannerSlider />
            <PopularDestination />
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