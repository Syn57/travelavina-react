import { getWcmsValue } from "../../utils/WcmsHelper";
import ic_arrow_right from "../../assets/icons/ic_arrow_right.svg";import ic_price from "../../assets/icons/ic_tag_price.svg";
import ic_service from "../../assets/icons/ic_service_head.svg";
import { LainnyaCardDomain } from "../../domain/model/lainnya/LainnyaCardDomain";
import { Rating } from "@mui/material";

const OtherCardItem = ({ card }: { card: LainnyaCardDomain }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden border border-ternary h-full flex flex-col">
      {/* Image Section */}
      <img src={card.image} className="w-full h-48 object-cover rounded-md" />

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-2xl font-abhaya font-bold mb-1">{card.title}</h2>
        <div className="flex items-center mb-3">
          <span className="text-xl font-semibold font-alike">{card.rating.toFixed(1)}</span>
          <Rating name="half-rating-read" defaultValue={card.rating} precision={0.1} readOnly className="ms-2" />
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mb-4 font-inria">{card.desc}</p>

        {/* Button */}
        <a href={card.route}
          className="w-1/2 px-4 pb-3 pt-2 bg-secondary hover:bg-orange-600 rounded-lg text-white font-medium flex items-center text-sm font-alike justify-center self-end mt-auto">
          {getWcmsValue(card.btnText)}
          <img src={ic_arrow_right} className="h-4 w-4 ml-3 mt-1"></img>
        </a>
      </div>

      {/* Footer Section - Attached to Bottom */}
      <div className="bg-ternary p-4 flex justify-around items-center mt-auto">
        <div className="flex items-center space-x-2">
          <img src={ic_price} className="w-6 h-6" />
          <span className="text-lg font-semibold text-white font-abhaya">Affordable Price</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src={ic_service} className="w-6 h-6"/>
          <span className="text-lg font-semibold text-white font-abhaya">Best Service</span>
        </div>
      </div>
    </div>
  );
};
  
export default OtherCardItem;
  