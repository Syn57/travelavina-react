import homeCards from  "../../configs/homePageCard.json"
import HomePageCardItem from "../component/HomePageCardItem";

const HomepageCard = () => {
    return (
        <div className="grid grid-cols-2 gap-5 px-80 mt-[40px]">
            {/* First Row: Two Items */}
            <HomePageCardItem 
                card={{
                    image: homeCards[0].image,
                    destination: homeCards[0].destinationTitle,
                    star: homeCards[0].rating,
                }}
                className="col-span-1"
            />
            <HomePageCardItem 
                card={{
                    image: homeCards[1].image,
                    destination: homeCards[1].destinationTitle,
                    star: homeCards[1].rating,
                }}
                className="col-span-1"
            />

            {/* Second Row: Three Items */}
            <div className="grid grid-cols-3 gap-5 col-span-2">
                <HomePageCardItem 
                    card={{
                        image: homeCards[2].image,
                        destination: homeCards[2].destinationTitle,
                        star: homeCards[2].rating,
                    }}
                    className=""
                />
                <HomePageCardItem 
                    card={{
                        image: homeCards[3].image,
                        destination: homeCards[3].destinationTitle,
                        star: homeCards[3].rating,
                    }}
                    className=""
                />
                <HomePageCardItem 
                    card={{
                        image: homeCards[4].image,
                        destination: homeCards[4].destinationTitle,
                        star: homeCards[4].rating,
                    }}
                    className=""
                />
            </div>
        </div>
    );
};

export default HomepageCard;