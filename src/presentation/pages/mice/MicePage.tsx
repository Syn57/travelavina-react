import { RC_KEY_PROMO_MICE_MAIN_PAGE } from "../../../utils/Constants";
import PromoMiceCard from "../../component/PromoMiceCard";
import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";
import Cards from "./section/Cards";

const MicePage = () => {
    return (
        <div className="relative">
            <NavigationBar />
            <ImageBannerStatic title="MICE" img={`https://trv3-public.travelavina.com/assets/mice/mice-header.jpg`} className=""/>
            <Cards />
            <PromoMiceCard className="" rc_key={`${RC_KEY_PROMO_MICE_MAIN_PAGE}`} />
        </div>
    );
}

export default MicePage;
