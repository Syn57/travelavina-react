import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";

const AboutPage = () => {
    return (
        <div className="relative">
            <NavigationBar />
            <ImageBannerStatic title="About" img="src/assets/images/slider-banner-3.jpg" className=""/>
            <p>This is About Page</p>
        </div>
    );
};

export default AboutPage;