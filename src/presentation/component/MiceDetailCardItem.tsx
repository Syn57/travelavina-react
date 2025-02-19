import { Rating } from "@mui/material";
import { MiceDetailCardItemDomain } from "../../domain/model/micedetail/MiceDetailCardItemDomain";
import ButtonArrowRight from "./ButtonArrowRight";
 
const MiceDetailCardItem = ({ card } : { card: MiceDetailCardItemDomain}) => {
    return (
      <div className="flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-lg overflow-hidden mt-8 px-5 max-w-5xl">
            {/* Image Section */}
            <div className="w-full lg:w-[60%]">
              <img
                src={card.image}
                className="w-full object-cover rounded-xl h-[320px]"
              />
            </div>
      
            {/* Content Section */}
            <div className="w-full lg:w-[40%] px-6 flex flex-col place-content-between lg:h-[320px]">
              <h2 className="text-3xl text-gray-800 font-alatsi mt-4 lg:mt-0">{card.title}</h2>
      
              {/* Rating Section */}
              <div className="flex items-center mb-4">
                <span className="text-3xl font-alice text-black mr-2 leading-none">{card.rating.toFixed(1)}</span>
                <Rating name="half-rating-read" defaultValue={card.rating} precision={0.1} readOnly className="pt-1"/>
              </div>
      
              {/* Description Section */}
              <p className="text-gray-600 mb-6 font-inria text-justify">{card.desc}</p>
      
              {/* Button Section */}
              <ButtonArrowRight route={card.route} title={card.btnText} className="w-1/2"/>
            </div>
        </div>
      </div>
    );
}

export default MiceDetailCardItem;