import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import banners from "../configs/homeSliderBanner.json"; 
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css'; // Optional, as autoplay styles are included by default
import 'swiper/bundle';
import BannerSilderItem from "./BannerSliderItem";
import ic_left from "../assets/images/chevron-left.svg"
import ic_right from "../assets/images/chevron-right.svg"

const BannerSlider = () => {
    return (   
        <div className="swiper-frame w-full overflow-hidden flex h-[800px] align-middle justify-center">
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
                <SliderButton className="prev-button left-0 ml-16" isRight={false}/>
                <SliderButton className="next-button right-0  mr-16" isRight={true}/>
            </Swiper>
        </div>     
    );
};

const SliderButton = ({className = "", isRight = false}) => {
    const swiper = useSwiper();
    return (
        <button onClick={() => {isRight? swiper.slideNext() : swiper.slidePrev()}}>
            <img className={`h-[32px] w-[32px] top-[400px] absolute z-30 ${className}`} src={isRight? ic_right : ic_left}></img>
        </button>
    );
};

export default BannerSlider
