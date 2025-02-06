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
    if (recommendedPackages.length === 0) return null;
    return (
        <div className={`mt-[40px] flex flex-col items-center justify-center`}>
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
