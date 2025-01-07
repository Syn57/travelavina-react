import ic_arrow_right from "../../assets/icons/ic_arrow_right.svg"

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
            <div className="w-full h-full flex flex-col justify-center items-start bg-black bg-opacity-30 text-white absolute">
                <h2 className="text-[57px] font-bold mb-4 font-alfaslab tracking-widest mx-36">{banner.bannerTitle}</h2>
                <h2 className="text-[32px] font-normal mb-4 font-alata mx-36">{banner.bannerSubtitle}</h2>
                <a href={banner.route}
                    className="px-4 pb-3 pt-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium mx-36 mt-16 flex items-center text-xl">
                    {banner.btnText}
                    <img src={ic_arrow_right} className="h-4 w-4 ml-3 mt-1"></img>
                </a>
            </div>
        </div>
    );
};

export default BannerSilderItem;