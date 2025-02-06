import bg_testi from "https://trv3-public.travelavina.com/assets/Homepage/homepage-whatourclientsay-iconorang.jpg"
import { TESTIMONI_DESC, TESTIMONI_NAME, TESTIMONI_SUBTITLE, TESTIMONI_TITLE } from "../../../../utils/WcmsConstants";
import { getWcmsValue } from "../../../../utils/WcmsHelper";

const Testimoni = ({ className = "" }) => {
    return (
        <div className={`${className} w-full mt-[80px] flex relative h-auto`}>
            {/* Content Wrapper */}
            <div className="container-testi bg-black bg-opacity-50 w-full flex flex-col items-center justify-center relative h-auto z-10">
                <h1 className="
                    font-archivo text-2xl font-bold text-white mt-8
                    sm:text-3xl 
                    md:text-5xl
                    "
                >{getWcmsValue(TESTIMONI_TITLE)}</h1>
                <h2 className="
                    font-archivo text-lg font-bold text-white mt-4
                    sm:text-xl 
                    md:text-3xl"
                >{getWcmsValue(TESTIMONI_SUBTITLE)}</h2>
                <div className="w-[100px] h-1 bg-white mt-4"></div>
                <p className="
                    text-justify text-white mt-4 font-alice text-md px-8
                    sm:px-[10%] sm:text-xl
                    xl:px-[30%] "
                >
                    {getWcmsValue(TESTIMONI_DESC)}
                </p>
                <div className="flex items-center justify-center mt-10 mb-8">
                    <img 
                        src={"https://trv3-public.travelavina.com/assets/Homepage/homepage-whatourclientsay-iconorang.jpg"} 
                        className="h-[50px] w-[50px] rounded-full" />
                    <p className="text-white font-archivo ml-4">
                        Best Regards<br />
                        {getWcmsValue(TESTIMONI_NAME)}
                    </p>
                </div>
            </div>

            <img
                src={"https://trv3-public.travelavina.com/assets/Homepage/homepage-whatourclientsay-banner.jpg"}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                alt="Background"
            />
        </div>
    );
};

export default Testimoni;