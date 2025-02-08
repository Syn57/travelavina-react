import { PackageDomain } from "../../../../domain/model/configs/detail/PackagesDomain";
import { Rating } from "@mui/material";
import { BOOKING_NOW_TEXT } from "../../../../utils/WcmsConstants";
import { getWcmsValue } from "../../../../utils/WcmsHelper";
import ic_arrow_right from "../../../../assets/icons/ic_arrow_right.svg"
import ic_location from "../../../../assets/icons/ic_location.svg"

const ImageAndTitle = ({packageItem} : {packageItem : PackageDomain}) => {
    return (
        <div className="mt-10 mx-5">
          {/* Image Section */}
          <div className="relative">
            <img
              src={`${packageItem.imageUrl}`}
              alt={`${packageItem.title}`} 
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
          {/* Content Section */}
          <div className="mt-4">
            <h3 className="text-4xl mb-1 font-alice">{`${packageItem.title}`}</h3>
            <div className="flex w-full justify-between flex-col md:flex-row">
                <div>
                    <div className="flex items-center mb-2">
                        <span className="text-xl font-semibold mr-2 font-alike">{packageItem.rating.toFixed(1)}</span>
                        <div className="text-yellow-500 flex space-x-1">
                        <Rating name="half-rating-read" defaultValue={packageItem.rating} precision={0.1} readOnly className="ml-2"/>
                    </div>
                    </div>
                        <div className="flex items-center text-gray-600 text-lg font-alice">
                        <img className="h-[32px] w-[32px]" alt="" src={ic_location}/>
                        <span className="ms-2">{`${packageItem.title}`} </span>
                    </div>
                </div>
                
                <a href={packageItem.bookUrl}
                    className=" bg-secondary hover:bg-orange-600 rounded-lg text-white font-medium flex items-center text-xl font-alice w-1/2 md:w-1/4 justify-center h-[60px] mt-4 md:mt-0"
                >
                    {getWcmsValue(BOOKING_NOW_TEXT)}
                    <img src={ic_arrow_right} className="h-4 w-4 ml-3 mt-1"></img>
                </a>
            </div>
          </div>
        </div>
    );
};

export default ImageAndTitle;
