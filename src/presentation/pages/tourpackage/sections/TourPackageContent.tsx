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
import { useRef } from "react";

const TourPackagesContent = ({target=""}) => {
    const [tourPackages, setTourPackages] = useState<TourPackageDomain[]>([]);
    const tourSectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
    

    useEffect(() => {
        getTourPackages(setTourPackages);
        console.log("scrolling to", target);
    }, []);

    useEffect(() => {
        if (tourPackages.length > 0) {
            console.log("Trying to scroll to:", target, tourSectionsRef.current[target]);

            // Delay scroll to allow DOM updates
            setTimeout(() => {
                if (target && tourSectionsRef.current[target]) {
                    console.log("Scrolling to:", target);
                    tourSectionsRef.current[target]?.scrollIntoView({ behavior: "smooth" });
                }
            }, 100); // Small delay to allow React to update refs
        }
    }, [tourPackages]); // ✅ Runs only after tourPackages updates

    return (
        <div className="flex items-center justify-center">
            <div className={`${PAGE_WIDTH_CONFIG}`}>
                {tourPackages.map((tourPackage) => (
                    <div 
                        key={tourPackage.title} 
                        ref={(el) => (tourSectionsRef.current[tourPackage.title] = el)}
                        className="w-full mt-4"
                    >
                        <h2 className="font-alice text-4xl pt-6 mb-6">{tourPackage.title}</h2>
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

const getTourPackages = async (
    onFinishFetchAction: (arg0: TourPackageDomain[]) => void
) => {
    const repository = container.get<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository);
    const data = await repository.getTourPackageConfigs();
    onFinishFetchAction(data);
};

export default TourPackagesContent;
