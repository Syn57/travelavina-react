import bg_testi from "../../assets/images/slider-banner-2.jpg"
import { TESTIMONI_DESC, TESTIMONI_NAME, TESTIMONI_SUBTITLE, TESTIMONI_TITLE } from "../../utils/WcmsConstants";
import { getWcmsValue } from "../../utils/WcmsHelper";

const Testimoni = ({ className="" }) => {
    return (
        <div className={`${className} w-full mt-[80px] flex relative h-[480px]`}>
            <div className="bg-black bg-opacity-50 w-full  h-full flex flex-col items-center justify-center absolute">
                <h1 className="font-archivo text-5xl font-bold text-white">
                    {getWcmsValue(TESTIMONI_TITLE)}
                </h1>
                <h2 className="font-archivo text-3xl font-bold text-white mt-4">
                    {getWcmsValue(TESTIMONI_SUBTITLE)}
                </h2>
                <div className="w-[100px] h-1 bg-white mt-4"></div>
                <p className="px-80 text-justify text-white mt-4 font-alice text-xl">
                    {getWcmsValue(TESTIMONI_DESC)}
                </p>
                <div className="flex items-center justify-center mt-10">
                    <img src={bg_testi} className="h-[50px] w-[50px] rounded-full"/>
                    <p className="text-white font-archivo ml-4">
                        Best Regards<br/>{getWcmsValue(TESTIMONI_NAME)}
                    </p>
                </div>
            </div>
            <img src={bg_testi} className="w-full h-full object-cover"/>
        </div>
    );
};

export default Testimoni;