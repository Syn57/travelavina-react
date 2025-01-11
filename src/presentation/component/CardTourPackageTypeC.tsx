import { CardTourPackageItemDomain } from "../../domain/model/configs/CardTourPackageItemDomain";
import { gridHeightValueConverter } from "../../utils/StringHelper";
import { CardLayoutProps } from "../model/CardLayoutProps";

const CardTourPackageTypeC = ({
    layoutConfigs,
    card,
}: {
    layoutConfigs: CardLayoutProps;
    card: CardTourPackageItemDomain;
}) => {
    return (
        <div className={`relative ${gridHeightValueConverter(layoutConfigs.height)}`}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary bg-opacity-60 flex flex-col z-10 justify-end items-start pb-4 ps-4">
                <p className="text-white text-2xl font-alkalami">{card.title}</p>
                <a href={`${card.route}`} className="px-8 py-1 mt-1 bg-white bg-opacity-70 rounded-md text-black font-alice text-sm hover:bg-opacity-90 transition">
                    Learn More
                </a>
            </div>
            <img
                src={card.image}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                alt="Background"
            />
        </div>
    );
};

export default CardTourPackageTypeC;