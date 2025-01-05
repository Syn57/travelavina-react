import { TOUR_PACKAGES_DESC, TOUR_PACKAGES_TITLE } from "../../utils/WcmsConstants";
import { getWcmsValue } from "../../utils/WcmsHelper";

const TourPackages = () => {
    return (
        <div className="items-center justify-center">
            <h2 className="font-alice text-5xl justify-self-center mt-[40px]">{getWcmsValue(TOUR_PACKAGES_TITLE)}</h2>
            <p className="font-alice text-3xl justify-self-center mt-[20px] px-80">{getWcmsValue(TOUR_PACKAGES_DESC)}</p>
        </div>
    );
};

export default TourPackages;