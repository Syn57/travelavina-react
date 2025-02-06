import { getWcmsValue } from "../../utils/WcmsHelper";

const TitleDesc = ({title="", desc=""}) => {
    return (
        <div className="items-center justify-center md:px-72 px-5">
            <h2 className="font-alice text-5xl justify-self-center mt-[40px] text-black text-center">{getWcmsValue(title)}</h2>
            <p className="font-inria text-xl justify-self-center mt-[20px] text-black text-center">{getWcmsValue(desc)}</p>
        </div>
    );
};

export default TitleDesc;