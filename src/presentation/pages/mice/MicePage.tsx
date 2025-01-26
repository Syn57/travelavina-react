import { RC_KEY_PROMO_MICE_MAIN_PAGE } from "../../../utils/Constants";
import PromoMiceCard from "../../component/PromoMiceCard";
import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";
import Cards from "./section/Cards";

const MicePage = () => {
    return (
        <div className="relative">
            <NavigationBar />
            <ImageBannerStatic title="MICE" img="src/assets/images/slider-banner-3.jpg" className=""/>
            <Cards />
            <PromoMiceCard className="px-10 md:px-80" rc_key={`${RC_KEY_PROMO_MICE_MAIN_PAGE}`} />
        </div>
    );
}

export default MicePage;
