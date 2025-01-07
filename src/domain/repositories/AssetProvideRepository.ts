import { HeaderIconDomain } from "../model/assets/HeaderIconDomain";
import { NavigationChipItemDomain } from "../model/assets/NavigationChipItemDomain";

export interface AssetProviderRepository {
    getHeaderAssets() : Promise<HeaderIconDomain[]>
    getNavigationbarAssets() : Promise<NavigationChipItemDomain[]>
}