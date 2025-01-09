import banners from "../../configs/homeSliderBanner.json"; 
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/bundle';
import BannerSilderItem from "./BannerSliderItem";
import ic_left from "../../assets/images/chevron-left.svg"
import ic_right from "../../assets/images/chevron-right.svg"
import ic_customer from "../../assets/icons/ic_customer.svg"
import ic_plane from "../../assets/icons/ic_plane.svg"
import ic_city from "../../assets/icons/ic_city.svg"
import ic_accomodation from "../../assets/icons/ic_accomodation.svg"
import { getWcmsValue } from "../../utils/WcmsHelper";
import { TOTAL_ACCOMODATION_TEXT, TOTAL_CITY_TEXT, TOTAL_CUSTOMER_TEXT, TOTAL_TOUR_TEXT } from "../../utils/WcmsConstants";

const BannerSlider = () => {
    return (   
        <div className="relative swiper-frame w-full overflow-hidden flex h-[400px] sm:h-[800px] align-middle justify-center">
            <Swiper
                modules={[Navigation, Pagination]}
                className="swiper-container w-full h-full"
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 3000
                }}
                pagination={{clickable:true}}
                loop={true} >
                {banners.map((banner, _) =>(
                    <SwiperSlide>
                        <BannerSilderItem banner={banner}/>
                    </SwiperSlide>
                ))}
                <SliderButton className="prev-button left-0 ml-4 sm:ml-8 lg:ml-16" isRight={false}/>
                <SliderButton className="next-button right-0  mr-4 sm:mr-8 lg:mr-16" isRight={true}/>
                <BottomNavbar />
            </Swiper>
        </div>     
    );
};

const BottomNavbar = () => {
    return (
        <div className="absolute bottom-0 w-full flex bg-[#2C3C7C]/80 z-20 backdrop-blur-lg justify-center items-center space-x-24 h-[100px]">
            <div className="flex space-x-4 justify-center items-center">
                <img src={ic_customer} className="h-8 w-8"></img>
                <p className="text-white font-medium text-2xl font-poppins">{getWcmsValue(TOTAL_CUSTOMER_TEXT)}</p>
            </div>
            <div className="flex space-x-4 justify-center items-center">
                <img src={ic_city} className="h-8 w-8"></img>
                <p className="text-white font-medium text-2xl font-poppins">{getWcmsValue(TOTAL_CITY_TEXT)}</p>
            </div>
            <div className="flex space-x-4 justify-center items-center">
                <img src={ic_plane} className="h-8 w-8"></img>
                <p className="text-white font-medium text-2xl font-poppins">{getWcmsValue(TOTAL_TOUR_TEXT)}</p>
            </div>
            <div className="flex space-x-4 justify-center items-center">
                <img src={ic_accomodation} className="h-8 w-8"></img>
                <p className="text-white font-medium text-2xl font-poppins">{getWcmsValue(TOTAL_ACCOMODATION_TEXT)}</p>
            </div>
        </div>
    );
}

const SliderButton = ({className = "", isRight = false}) => {
    const swiper = useSwiper();
    return (
        <button onClick={() => {isRight? swiper.slideNext() : swiper.slidePrev()}}>
            <img className={`h-[32px] w-[32px] top-[200px] sm:top-[400px] absolute z-30 ${className}`} src={isRight? ic_right : ic_left}></img>
        </button>
    );
};

export default BannerSlider
