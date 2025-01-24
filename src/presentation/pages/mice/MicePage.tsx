import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";
import Cards from "./section/Cards";

const MicePage = () => {
    return (
        <div className="relative">
            <NavigationBar />
            <ImageBannerStatic title="MICE" img="src/assets/images/slider-banner-3.jpg" className=""/>
            <Cards />
        </div>
    );
}

export default MicePage;
