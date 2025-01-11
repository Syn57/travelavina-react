import { TourPackageDomain } from "../model/configs/TourPackageDomain";

export interface ConfigsProviderRepository {
    getTourPackageConfigs() : Promise<TourPackageDomain[]>
}