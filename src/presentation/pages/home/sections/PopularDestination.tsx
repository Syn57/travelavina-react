import { SPOTLIGHT_DESTINATION_DESC, SPOTLIGHT_DESTINATION_TITLE } from "../../../../utils/WcmsConstants";
import { getWcmsValue } from "../../../../utils/WcmsHelper";


const PopularDestination = () => {
    return (
        <div className= "flex flex-col items-center justify-center">
            <p className="font-alice text-2xl text-center justify-self-center mt-[40px] sm:text-5xl">{getWcmsValue(SPOTLIGHT_DESTINATION_TITLE)}</p>
            <p className="font-alike text-sm justify-self-center mt-[20px] text-justify px-6 sm:px-[10%] sm:text-2xl md:px-[20%] lg:px-[30%]">
                {getWcmsValue(SPOTLIGHT_DESTINATION_DESC)}
            </p>
        </div>
    );
};

export default PopularDestination;