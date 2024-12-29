

interface Banner {
    image: string;
    bannerTitle: string;
    btnText: string;
    route: string;
    order: number;
}

interface BannerProps {
banner: Banner; // Use the Banner type for the banner prop
}

const BannerSilderItem: React.FC<BannerProps> = ({ banner }) => {
    return (
        <div
            key={banner.order}
            className="top-0 left-0 w-full h-full flex">
            <img src={banner.image} className="w-full h-full object-cover"></img>
            <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white absolute">
                <h2 className="text-4xl font-bold mb-4">{banner.bannerTitle}</h2>
                <a href={banner.route}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-2xl text-white font-medium">
                    
                    {banner.btnText}
                </a>
            </div>
        </div>
    );
};

export default BannerSilderItem;