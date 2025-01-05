import ic_city from "../../assets/icons/ic_city_tour.svg"
import ic_history from "../../assets/icons/ic_history.svg"
import ic_adventure from "../../assets/icons/ic_adventure.svg"
import ic_spiritual from "../../assets/icons/ic_religious.svg"
import ic_culture from "../../assets/icons/ic_tradition.svg"

const TourType = () => {
    const types: [string, string][] = [
        [ic_city, "City Tour"],
        [ic_history, "Historical Tour"],
        [ic_adventure, "Adventure"],
        [ic_spiritual, "Spiritual"],
        [ic_culture, "Culture"],
    ];
    return (
        <div className="text-center">
            <h2 className="font-alice text-5xl mt-20 mb-16">Categories Tour Types</h2>
            <div className="flex justify-center gap-16">
                {types.map((category, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={category[0]}
                            alt={category[1]}
                            className="w-16 h-16"
                        />
                        <span className="text-lg mt-2 font-alice ">{category[1]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourType;