import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PackageDomain } from "../../../../domain/model/configs/detail/PackagesDomain";
import ic_documentation from "../../../../assets/icons/ic_documentation.svg"
import ic_facebook from "../../../../assets/icons/ic_facebook.svg"
import ic_instagram from "../../../../assets/icons/ic_instagram.svg"
import ic_whatsapp from "../../../../assets/icons/ic_whatsapp.svg"
import ic_email from "../../../../assets/icons/ic_email.svg"
import ic_right from "../../../../assets/icons/ic_chevron_plain_right.svg"
import ic_left from "../../../../assets/icons/ic_chevron_plain_left.svg"

const Documentation = ({packageItem} : {packageItem : PackageDomain}) => {
    return (
        <div className="relative mt-10 mx-auto px-96 text-center">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                    <img
                        src={ic_documentation}
                        alt="Location Icon"
                        className="h-8 w-8 mr-2"
                    />
                    <h4 className="text-2xl font-alatsi">Tours Location</h4>
                </div>
                <h4 className="text-2xl font-alike font-medium">{packageItem.location}</h4>
            </div>

            {/* Swiper for Images */}
            <Swiper
                pagination={{ 
                    clickable: true,
                }}
                spaceBetween={20}
                slidesPerView={2}
                loop={true}
                style={{
                    "--swiper-pagination-color": "#F97A0B",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "8px",
                    "--swiper-pagination-bullet-horizontal-gap": "4px",
                  } as React.CSSProperties}
                className="swiper-container w-full h-[300px] relative"
            >
                {/* Left navigation button */}
                <SliderButtonDetail
                    className="absolute top-32 -translate-y-1/2 left-4 z-[999]"
                    isRight={false}
                />
                {/* Right navigation button */}
                <SliderButtonDetail
                    className="absolute top-32 -translate-y-1/2 right-4 z-[999]"
                    isRight={true}
                />
                {packageItem.photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={photo}
                            alt={`Location Image ${index + 1}`}
                            className="object-cover w-full h-64 rounded-lg z-10"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* Share Section */}
            <div className="mt-8">
                <h5 className="text-lg font-medium text-gray-700 mb-4">Share This :</h5>
                <div className="flex justify-center gap-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src={ic_instagram}
                            alt="Instagram"
                            className="h-6 w-6"
                        />
                    </a>
                    <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
                        <img
                            src={ic_whatsapp}
                            alt="WhatsApp"
                            className="h-6 w-6"
                        />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <img
                            src={ic_facebook}
                            alt="Facebook"
                            className="h-6 w-6"
                        />
                    </a>
                    <a href="mailto:?subject=Check out this tour&body=Visit this amazing place">
                        <img
                            src={ic_email}
                            alt="Email"
                            className="h-6 w-6"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

const SliderButtonDetail = ({className = "", isRight = false}) => {
    const swiper = useSwiper();
    return (
        <button onClick={() => {isRight? swiper.slideNext() : swiper.slidePrev()}}>
            <img className={`h-[32px] w-[32px] absolute z-30 ${className}`} src={isRight? ic_right : ic_left}></img>
        </button>
    );
};

export default Documentation;
