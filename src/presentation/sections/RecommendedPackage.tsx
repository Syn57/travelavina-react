import packages from "../../configs/homeRecommendationPackage.json"
import RecommendedPackageItem from "../component/RecommendedPackageItem";

const RecommendedPackage = () => {
    return (
        <div className="px-80 mt-[40px]">
            {packages.map((packageRecommendationItem, index) => (
                <RecommendedPackageItem key={index} packageItem={packageRecommendationItem} className="flex w-full mb-4" />
            ))}
        </div>
    );
};

export default RecommendedPackage;
