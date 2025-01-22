import { useEffect, useState } from "react";
import container from "../../../../di/Modules";
import { TYPES } from "../../../../di/Types";
import RecommendedPackageDomain from "../../../../domain/model/homepage/RecommendedPackageDomain";
import { ConfigsProviderRepository } from "../../../../domain/repositories/ConfigsProviderRepository";
import RecommendedPackageItem from "../../../component/RecommendedPackageItem";

const RecommendedPackage = () => {
    const [recommendedPackages, setRecommendedPackages] = useState<RecommendedPackageDomain[]>([]);
    useEffect(() =>{
        getRecommendedPackage(setRecommendedPackages);
    }, []);
    return (
        <div className="px-80 mt-[40px]">
            {recommendedPackages.map((packageRecommendationItem, index) => (
                <RecommendedPackageItem key={index} packageItem={packageRecommendationItem} className="flex w-full mb-4" />
            ))}
        </div>
    );
};

const getRecommendedPackage = async (
    onFinishFetchAction: (arg0: RecommendedPackageDomain[]) => void
) => {
    const repository = container.get<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository);
    const data = await repository.getRecommendedPackage();
    onFinishFetchAction(data);
};

export default RecommendedPackage;
