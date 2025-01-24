import { PackageDomain } from "../model/configs/detail/PackagesDomain";
import { TourPackageDomain } from "../model/configs/TourPackageDomain";
import { PopularDestinationDomain } from "../model/homepage/PopularDestinationDomain";
import RecommendedPackageDomain from "../model/homepage/RecommendedPackageDomain";
import { SliderBannerDomain } from "../model/homepage/SliderBannerDomain";
import { MiceCardDomain } from "../model/mice/MiceCardDomain";

export interface ConfigsProviderRepository {
    getTourPackageConfigs() : Promise<TourPackageDomain[]>
    getDetailPackage(id: string) : Promise<PackageDomain | null>
    getSliderBanner() : Promise<SliderBannerDomain[]>
    getPopularDestination() : Promise<PopularDestinationDomain[]>
    getRecommendedPackage() : Promise<RecommendedPackageDomain[]>
    getMiceCard() : Promise<MiceCardDomain[]>
}