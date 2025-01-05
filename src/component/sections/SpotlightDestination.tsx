import { SPOTLIGHT_DESTINATION_DESC, SPOTLIGHT_DESTINATION_TITLE } from "../../utils/WcmsConstants";
import { getWcmsValue } from "../../utils/WcmsHelper";


const SpotlightDestination = () => {
    return (
        <div className="items-center justify-center">
            <h2 className="font-alice text-5xl justify-self-center mt-[40px]">{getWcmsValue(SPOTLIGHT_DESTINATION_TITLE)}</h2>
            <p className="font-alice text-2xl w-full justify-self-center mt-[20px] text-justify px-80">{getWcmsValue(SPOTLIGHT_DESTINATION_DESC)}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum facilis nesciunt sunt neque id eos repellat excepturi maiores cum nulla.</p>
        </div>
    );
};

export default SpotlightDestination;