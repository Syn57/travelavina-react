import { CardTourPackageItemDomain } from "../../domain/model/configs/CardTourPackageItemDomain";
import { gridHeightValueConverter } from "../../utils/StringHelper";
import { CardLayoutProps } from "../model/CardLayoutProps";

const CardTourPackageTypeF = ({
    layoutConfigs,
    card,
}: {
    layoutConfigs: CardLayoutProps;
    card: CardTourPackageItemDomain;
}) => {
    return (
        <div className={`relative ${gridHeightValueConverter(layoutConfigs.height)}`}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary bg-opacity-60 flex flex-col z-10 justify-center items-center">
                <p className="text-white text-4xl font-alkalami text-center">{card.title}</p>
                <a href={`${card.route}`} className="mt-4 px-8 py-2 bg-white bg-opacity-70 rounded-md text-black font-alice text-sm hover:bg-opacity-90 transition">
                    Chat Me
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

export default CardTourPackageTypeF;