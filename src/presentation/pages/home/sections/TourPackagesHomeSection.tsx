import { TOUR_PACKAGES_DESC, TOUR_PACKAGES_TITLE } from "../../../../utils/WcmsConstants";
import { getWcmsValue } from "../../../../utils/WcmsHelper";

const TourPackagesHomeSection = () => {
    return (
        <div className="items-center justify-center">
            <h2 className="font-alice text-5xl justify-self-center mt-[40px] text-black text-center">{getWcmsValue(TOUR_PACKAGES_TITLE)}</h2>
            <p className="font-alice text-3xl justify-self-center mt-[20px] text-black text-center">{getWcmsValue(TOUR_PACKAGES_DESC)}</p>
        </div>
    );
};

export default TourPackagesHomeSection;