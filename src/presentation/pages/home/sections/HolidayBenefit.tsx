import { HOLIDAY_COLUMN_1_DESC, HOLIDAY_COLUMN_1_TITLE, HOLIDAY_COLUMN_2_DESC, HOLIDAY_COLUMN_2_TITLE, HOLIDAY_COLUMN_3_DESC, HOLIDAY_COLUMN_3_TITLE, HOLIDAY_COLUMN_4_DESC, HOLIDAY_COLUMN_4_TITLE, HOLIDAY_TITLE } from "../../../../utils/WcmsConstants";
import { getWcmsValue } from "../../../../utils/WcmsHelper";

const HolidayBenefit = () => {
    return (
        <div className="text-center px-4 md:px-20 lg:px-40 2xl:px-[500px]">
            <h2 className="font-alice text-5xl mb-20 mt-20">
                {getWcmsValue(HOLIDAY_TITLE).split("<br/>").map((line, index) => (
                    <span key={index}>
                        {line}
                        {index < getWcmsValue(HOLIDAY_TITLE).split("<br/>").length - 1 && <br />}
                    </span>
                ))}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                <div className="text-left">
                    <h3 className="font-alice text-2xl lg:text-3xl mb-4">{getWcmsValue(HOLIDAY_COLUMN_1_TITLE)}</h3>
                    <p className="font-alice text-md lg:text-lg text-justify lg:ms-6 ms-5">{getWcmsValue(HOLIDAY_COLUMN_1_DESC)}</p>
                </div>
                <div className="text-left">
                    <h3 className="font-alice text-2xl lg:text-3xl mb-4">{getWcmsValue(HOLIDAY_COLUMN_2_TITLE)}</h3>
                    <p className="font-alice text-md lg:text-lg text-justify lg:ms-6 ms-5">{getWcmsValue(HOLIDAY_COLUMN_2_DESC)}</p>
                </div>
                <div className="text-left">
                    <h3 className="font-alice text-2xl lg:text-3xl mb-4">{getWcmsValue(HOLIDAY_COLUMN_3_TITLE)}</h3>
                    <p className="font-alice text-md lg:text-lg text-justify lg:ms-6 ms-5">{getWcmsValue(HOLIDAY_COLUMN_3_DESC)}</p>
                </div>
                <div className="text-left">
                    <h3 className="font-alice text-2xl lg:text-3xl mb-4">{getWcmsValue(HOLIDAY_COLUMN_4_TITLE)}</h3>
                    <p className="font-alice text-md lg:text-lg text-justify lg:ms-6 ms-5">{getWcmsValue(HOLIDAY_COLUMN_4_DESC)}</p>
                </div>
            </div>
        </div>
    );
};

export default HolidayBenefit;