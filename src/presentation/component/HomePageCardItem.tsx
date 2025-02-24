import { Rating } from "@mui/material";
import ic_arrow_right from "../../assets/icons/ic_arrow_right.svg"
import { BOOKING_NOW_TEXT } from "../../utils/WcmsConstants";
import { getWcmsValue } from "../../utils/WcmsHelper";

interface IHomepageCard {
    image: string;
    destinationTitle: string;
    rating: number;
    route: string;
}

const HomePageCardItem = ({ className = "", card}: {className: string, card: IHomepageCard}) => {
    return (
        <div className={`justify-center items-center h-full ${className}`}>
            <img src={card.image} className="rounded-3xl h-[250px] sm:h-[350px] w-full"></img>
            <div className="flex pt-5">
                <div className="font-alata font-bold text-md md:text-xl w-1/2">
                    {card.destinationTitle}
                    <div className="flex font-alice font-bold text-lg items-center">
                        {card.rating.toFixed(1)}
                        <Rating name="half-rating-read" defaultValue={card.rating} precision={0.1} readOnly className="ml-2"/>
                    </div>
                </div>
                <a href={card.route}
                    className="px-4 pb-3 pt-2 bg-secondary hover:bg-orange-600 rounded-lg text-white font-medium flex items-center text-md xl:text-lg font-alice w-1/2 justify-center h-[60px]">
                    {getWcmsValue(BOOKING_NOW_TEXT)}
                    <img src={ic_arrow_right} className="h-4 w-4 ml-3 mt-1"></img>
                </a>
            </div>
        </div>
    );
};

export default HomePageCardItem;