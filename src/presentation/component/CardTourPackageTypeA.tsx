import { CardTourPackageItemDomain } from "../../domain/model/configs/CardTourPackageItemDomain";
import { gridHeightValueConverter } from "../../utils/StringHelper";
import { CardLayoutProps } from "../model/CardLayoutProps";

const CardTourPackageTypeA = ({
    layoutConfigs,
    card,
}: {
    layoutConfigs: CardLayoutProps;
    card: CardTourPackageItemDomain;
}) => {
    return (
        <div className={`relative ${gridHeightValueConverter(layoutConfigs.height)}`}>
            <div className="absolute inset-0 bg-primary bg-opacity-60 z-10 flex items-center justify-center">
                <p className="text-white text-2xl font-alkalami">{card.title}</p>
            </div>
            <a href={`${card.route}`} 
                className="absolute z-20 mt-4 px-4 py-2 bg-white bg-opacity-70 rounded-md text-black font-alice text-sm hover:bg-opacity-90 bottom-0 mb-4 inset-x-0 mx-3 text-center transition"
            >Learn More</a>
            <img
                src={card.image}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                alt="Background"
            />
        </div>
    );
};

export default CardTourPackageTypeA;