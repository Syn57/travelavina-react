import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/bundle';
import BannerSilderItem from "./BannerSliderItem";
import ic_left from "../../assets/images/chevron-left.svg"
import ic_right from "../../assets/images/chevron-right.svg"
import ic_customer from "../../assets/icons/ic_customer_black.svg"
import ic_plane from "../../assets/icons/ic_plane_black.svg"
import ic_city from "../../assets/icons/ic_city_black.svg"
import ic_accomodation from "../../assets/icons/ic_accomodation_black.svg"
import { getWcmsValue } from "../../utils/WcmsHelper";
import { TOTAL_ACCOMODATION_TEXT, TOTAL_CITY_TEXT, TOTAL_CUSTOMER_TEXT, TOTAL_TOUR_TEXT } from "../../utils/WcmsConstants";
import { useEffect, useState } from "react";
import { SliderBannerDomain } from "../../domain/model/homepage/SliderBannerDomain";
import container from "../../di/Modules";
import { ConfigsProviderRepository } from "../../domain/repositories/ConfigsProviderRepository";
import { TYPES } from "../../di/Types";
import { PAGE_WIDTH_CONFIG } from '../../utils/Constants';

const BannerSlider = () => {
    const [banners, setBanners] = useState<SliderBannerDomain[]>([]);
    useEffect(() =>{
        getSliderBanner(setBanners);
    }, []);
    return (   
        <div className="relative swiper-frame w-full overflow-hidden flex h-[600px] sm:h-[800px] align-middle justify-center">
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
                    {banners.map((banner, index) =>(
                        <SwiperSlide  key={index}>
                            <BannerSilderItem banner={banner}/>
                        </SwiperSlide>
                    ))}
                    <SliderButton className="prev-button left-0 ml-5 sm:ml-8 lg:ml-16" isRight={false}/>
                    <SliderButton className="next-button right-0  mr-5 sm:mr-8 xl:mr-16" isRight={true}/>
                    <BottomNavbar />
            </Swiper>
        </div>     
    );
};

const BottomNavbar = () => {
    return (
        <div className="absolute bottom-0 w-full flex bg-primary/80 z-20 justify-center items-center space-x-24 h-[100px]">
            <div className="flex space-x-4 justify-center items-center">
                <img src={ic_customer} className="h-8 w-8"></img>
                <p className="text-white font-medium text-2xl font-abhaya">{getWcmsValue(TOTAL_CUSTOMER_TEXT)}</p>
            </div>
            <div className="flex space-x-4 justify-center items-center">
                <img src={ic_city} className="h-8 w-8"></img>
                <p className="text-white font-medium text-2xl font-abhaya">{getWcmsValue(TOTAL_CITY_TEXT)}</p>
            </div>
            <div className="flex space-x-4 justify-center items-center">
                <img src={ic_plane} className="h-8 w-8"></img>
                <p className="text-white font-medium text-2xl font-abhaya">{getWcmsValue(TOTAL_TOUR_TEXT)}</p>
            </div>
            <div className="flex space-x-4 justify-center items-center">
                <img src={ic_accomodation} className="h-8 w-8"></img>
                <p className="text-white font-medium text-2xl font-abhaya">{getWcmsValue(TOTAL_ACCOMODATION_TEXT)}</p>
            </div>
        </div>
    );
}

const SliderButton = ({className = "", isRight = false}) => {
    const swiper = useSwiper();
    return (
        <button onClick={() => {isRight? swiper.slideNext() : swiper.slidePrev()}}>
            <img className={`h-[32px] w-[32px] top-[300px] sm:top-[400px] absolute z-30 ${className}`} src={isRight? ic_right : ic_left}></img>
        </button>
    );
};

const getSliderBanner = async (
    onFinishFetchAction: (arg0: SliderBannerDomain[]) => void
) => {
    const repository = container.get<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository);
    const data = await repository.getSliderBanner();
    onFinishFetchAction(data);
};

export default BannerSlider
