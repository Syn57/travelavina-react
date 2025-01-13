import homeCards from  "../../../../configs/homePageCard.json"
import HomePageCardItem from "../../../component/HomePageCardItem";

const HomepageCard = () => {
    return (
        <>
        <div className="grid grid-cols-2 gap-5 px-80 mt-[40px]">
            {/* First Row: Two Items */}
            <HomePageCardItem 
                card={homeCards[0]}
                className="col-span-1"
            />
            <HomePageCardItem 
                card={homeCards[1]}
                className="col-span-1"
            />
                 
        </div>
        {/* Second Row: Three Items */}
        <div className="grid grid-cols-3 gap-5 px-80 col-span-2 mt-8">
            <HomePageCardItem 
                card={homeCards[2]}
                className=""
            />
            <HomePageCardItem 
                card={homeCards[3]}
                className=""
            />
            <HomePageCardItem 
                card={homeCards[4]}
                className=""
            />
        </div>
        </>
    );
};

export default HomepageCard;