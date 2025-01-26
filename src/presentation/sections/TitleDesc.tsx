import { getWcmsValue } from "../../utils/WcmsHelper";

const TitleDesc = ({title="", desc=""}) => {
    return (
        <div className="items-center justify-center">
            <h2 className="font-alice text-5xl justify-self-center mt-[40px] text-black text-center md:px-72">{getWcmsValue(title)}</h2>
            <p className="font-inria text-xl justify-self-center mt-[20px] text-black text-center md:px-72">{getWcmsValue(desc)}</p>
        </div>
    );
};

export default TitleDesc;