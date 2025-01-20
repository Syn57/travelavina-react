import { PackageDomain } from "../model/configs/detail/PackagesDomain";
import { TourPackageDomain } from "../model/configs/TourPackageDomain";

export interface ConfigsProviderRepository {
    getTourPackageConfigs() : Promise<TourPackageDomain[]>
    getDetailPackage(id: string) : Promise<PackageDomain | null>
}