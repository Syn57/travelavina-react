import { CardTourPackageItemDomain } from "../../domain/model/configs/CardTourPackageItemDomain";
import { gridHeightValueConverter } from "../../utils/StringHelper";
import { CardLayoutProps } from "../model/CardLayoutProps";

const CardTourPackageTypeE = ({
    layoutConfigs,
    card,
}: {
    layoutConfigs: CardLayoutProps;
    card: CardTourPackageItemDomain;
}) => {
    return (
        <div className={`relative ${gridHeightValueConverter(layoutConfigs.height)}`}>
            <div className="absolute inset-0 bg-primary bg-opacity-60 z-10 flex items-center justify-center">
                <p className="text-white text-2xl font-alkalami text-center">{card.title}</p>
            </div>
            <img
                src={card.image}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                alt="Background"
            />
        </div>
    );
};

export default CardTourPackageTypeE;