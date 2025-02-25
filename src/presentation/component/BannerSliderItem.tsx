import ic_arrow_right from "../../assets/icons/ic_arrow_right.svg"
import { PAGE_WIDTH_CONFIG } from "../../utils/Constants";

interface IBanner {
    image: string;
    bannerTitle: string;
    bannerSubtitle: string;
    btnText: string;
    route: string;
    order: number;
}

interface IBannerProps {
    banner: IBanner;
}

const BannerSilderItem: React.FC<IBannerProps> = ({ banner }) => {
    return (
        <div
            key={banner.order}
            className="top-0 left-0 w-full h-full flex">
            <img src={banner.image} className="w-full h-full object-cover"></img>
            <div className="w-full h-full flex bg-black bg-opacity-30 text-white absolute">
                <div className={`${PAGE_WIDTH_CONFIG} w-full h-full flex flex-col mt-44 sm:justify-center items-start`}>
                    <h2 className="text-[30px] font-bold mb-4 w-full font-alfaslab tracking-wider sm:mx-24 sm:text-[40px] lg:mx-32 lg:text-[57px] whitespace-pre-line text-center md:text-start">
                        {banner.bannerTitle}
                    </h2>
                    <h2 className="text-[18px] font-normal mb-4 font-alata sm:mx-24 sm:text-[22px] mx-10 lg:mx-32 lg:text-[28px] text-center md:text-start">
                        {banner.bannerSubtitle}
                    </h2>
                    <a 
                        href={banner.route}
                        className="px-4 pb-3 pt-2 bg-secondary hover:bg-orange-600 rounded-lg text-white font-alatsi mt-8 flex items-center text-xl sm:mx-24 lg:mx-32 self-center md:self-start"
                    >
                        {banner.btnText}
                        <img src={ic_arrow_right} className="h-4 w-4 ml-3 mt-1 bottom-0"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BannerSilderItem;
