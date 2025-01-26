import { getWcmsValue } from "../../utils/WcmsHelper";
import ic_arrow_right from "../../assets/icons/ic_arrow_right.svg";

const ButtonArrowRight = ({route="", title="", className=""}) => {
    return (
        <a href={route}
            className={`px-4 pb-3 pt-2 bg-secondary hover:bg-orange-600 rounded-lg text-white font-medium flex items-center text-xl font-alice justify-center ${className}`}>
            {getWcmsValue(title)}
            <img src={ic_arrow_right} className="h-4 w-4 ml-3 mt-1"></img>
        </a>
    );
}

export default ButtonArrowRight;
