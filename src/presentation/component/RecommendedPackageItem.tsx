import ic_timer from "../../assets/icons/ic_tour_duration.svg"
import ic_min_people from "../../assets/icons/ic_people_min.svg"
import { Rating } from "@mui/material";
import { Link } from "react-router";
import { PAGE_WIDTH_CONFIG } from "../../utils/Constants";

interface IRecommendationPackageProps {
    title: string;
    image: string;
    days: string;
    minimum_person: string;
    desc: string;
    price: string;
    rating: number;
}

const RecommendedPackageItem = ({ className, packageItem }: { className: string, packageItem: IRecommendationPackageProps }) => {
    return (
        <div className={`flex flex-col lg:flex-row rounded-3xl overflow-hidden ${className} bg-[#161E41] items-center w-full max-w-7xl mx-5`}>
            <img
                className="w-full lg:w-1/3 h-72 object-cover rounded-3xl"
                src={packageItem.image}
                alt={packageItem.title}
            />
            <div className="flex w-full lg:w-2/3 flex-row h-full">
                <div className="flex-[3] text-white p-4 font-alice flex-col justify-center">
                    <h2 className="text-lg sm:text-2xl font-bold">{packageItem.title}</h2>
                    <div className="flex-col items-center gap-2 mt-2">
                        <div className="flex items-center mt-4">
                            <img src={ic_timer}  className="h-[30px] w-[30px]"/>
                            <p className="text-sm sm:text-base text-white ml-4 font-alike font-extralight">{packageItem.days}</p>
                        </div>
                        <div className="flex items-center mt-3">
                            <img src={ic_min_people} className="h-[30px] w-[30px]"/>
                            <p className="text-sm sm:text-base text-white ml-4 font-alike font-extralight">{packageItem.minimum_person}</p>
                        </div>
                    </div>
                    <p className="mt-4 font-inria sm:text-justify text-sm sm:text-base lg:pr-5">{packageItem.desc}</p>
                </div>
                <div className="flex-[1] text-white flex">
                    <div className="w-[2px] h-[200px] bg-white justify-self-start self-center"/>
                    <div className="flex flex-col justify-center items-center w-full mx-4">
                        <span className="text-3xl uppercase font-alike">Start</span>
                        <h3 className="text-5xl font-alfaslab mt-3">{packageItem.price}</h3>
                        <Rating name="half-rating-read" defaultValue={packageItem.rating} precision={0.1} readOnly className="mt-4"/>
                        <Link to="/package">
                            <button className="mt-4 bg-[#40AFD7] text-white py-2 px-4 rounded-xl hover:bg-[#3b9cc0] font-alike">
                                View Details
                            </button>
                        </Link>       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendedPackageItem;
