import React from "react";
import BannerSlider from "../../component/BannerSlider"
import NavigationBar from "../../component/sections/NavigationBar";
import SpotlightDestination from "../../component/sections/SpotlightDestination";
import HomePageCardItem from "../../component/HomePageCardItem";
import HomepageCard from "../../component/sections/HompageCard";
import Testimoni from "../../component/sections/Testimoni";
import TourPackages from "../../component/sections/TourPackages";
import RecommendedPackage from "../../component/sections/RecommendedPackage";
import TourType from "../../component/sections/TourType";
import HolidayBenefit from "../../component/sections/HolidayBenefit";

const HomePage = () => {
    return (
        <div className="relative items-center justify-start">
            <NavigationBar />
            <div>
                <BannerSlider />
            </div>
            <SpotlightDestination />
            <HomepageCard />
            <Testimoni />
            <TourPackages />
            <RecommendedPackage />
            <TourType />
            <HolidayBenefit />
        </div>

    );
};

export default HomePage;