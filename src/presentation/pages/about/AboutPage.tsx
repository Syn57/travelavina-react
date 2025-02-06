import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";
import Associates from "./sections/Associates";
import Features from "./sections/Feature";
import GalleryTrip from "./sections/GalleryTrip";
import TripService from "./sections/TripService";
import VisionAndMission from "./sections/VisionAndMission";
import WhoWeAre from "./sections/WhoWeAre";

const AboutPage = () => {
    return (
        <div className="relative">
            <NavigationBar />
            <ImageBannerStatic title="ABOUT US" img="https://trv3-public.travelavina.com/assets/about-us/aboutus-banner-aboutus.jpg" className=""/>
            <WhoWeAre />
            <Features />
            <VisionAndMission />
            <TripService />
            <Associates />
            <GalleryTrip />
        </div>
    );
};

export default AboutPage;