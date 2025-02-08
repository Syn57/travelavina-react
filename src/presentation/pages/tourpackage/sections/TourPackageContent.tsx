import { useEffect, useState } from "react";
import container from "../../../../di/Modules";
import { TYPES } from "../../../../di/Types";
import { TourPackageDomain } from "../../../../domain/model/configs/TourPackageDomain";
import { ConfigsProviderRepository } from "../../../../domain/repositories/ConfigsProviderRepository";
import CardTourPackageTypeA from "../../../component/CardTourPackageTypeA";
import { gridColumnValueConverter, gridGapValueConverter, gridHeightValueConverter } from "../../../../utils/StringHelper";
import CardTourPackageTypeB from "../../../component/CardTourPackageTypeB";
import CardTourPackageTypeC from "../../../component/CardTourPackageTypeC";
import CardTourPackageTypeD from "../../../component/CardTourPackageTypeD";
import CardTourPackageTypeE from "../../../component/CardTourPackageTypeE";
import CardTourPackageTypeF from "../../../component/CardTourPackageTypeF";
import { PAGE_WIDTH_CONFIG } from "../../../../utils/Constants";

const TourPackagesContent = () => {
    const [tourPackages, setTourPackages] = useState<TourPackageDomain[]>([]);

    useEffect(() => {
        getTourPackages(setTourPackages);
    }, []);
    
    return (
        <div className="flex items-center justify-center">
            <div className={`${PAGE_WIDTH_CONFIG}`}>
                {tourPackages.map((tourPackage) => (
                    <div className="w-full mt-10">
                        <h2 className="font-alice text-4xl mb-6">{tourPackage.title}</h2>
                        <div className={`grid ${gridColumnValueConverter(tourPackage.column)} ${gridGapValueConverter(tourPackage.gap)} md:grid-cols-2 grid-cols-1 gap-3`}>
                            {tourPackage.cards.map((card) => {
                                if (tourPackage.cardType === "A") {
                                    return <CardTourPackageTypeA layoutConfigs={{ height: tourPackage.height }} card={card} />;
                                } else if (tourPackage.cardType === "B") {
                                    return <CardTourPackageTypeB layoutConfigs={{ height: tourPackage.height }} card={card} />;
                                } else if (tourPackage.cardType === "C") {
                                    return <CardTourPackageTypeC layoutConfigs={{ height: tourPackage.height }} card={card} />;
                                } else if (tourPackage.cardType === "D") {
                                    return <CardTourPackageTypeD layoutConfigs={{ height: tourPackage.height }} card={card} />;
                                } else if (tourPackage.cardType === "E") {
                                    return <CardTourPackageTypeE layoutConfigs={{ height: tourPackage.height }} card={card} />;
                                }
                                return <CardTourPackageTypeF layoutConfigs={{ height: tourPackage.height }} card={card} />;
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    );
};

const getTourPackages= async (
    onFinishFetchAction: (arg0: TourPackageDomain[]) => void
) => {
    const repository = container.get<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository);
    const data = await repository.getTourPackageConfigs();
    onFinishFetchAction(data);
};

export default TourPackagesContent;
