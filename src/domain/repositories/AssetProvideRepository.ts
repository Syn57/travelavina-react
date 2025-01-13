import { AssociateDomain } from "../model/assets/AssociateDomain";
import { GalleryTripDomain } from "../model/assets/GalleryTripDomain";
import { HeaderIconDomain } from "../model/assets/HeaderIconDomain";
import { NavigationChipItemDomain } from "../model/assets/NavigationChipItemDomain";
import { TourTypeDomain } from "../model/assets/TourTypeDomain";

export interface AssetProviderRepository {
    getHeaderAssets() : Promise<HeaderIconDomain[]>
    getNavigationbarAssets() : Promise<NavigationChipItemDomain[]>
    getTourTypeAssets() : Promise<TourTypeDomain[]>
    getAssociatesAssets() : Promise<AssociateDomain[]>
    getGalleryTripAssets() : Promise<GalleryTripDomain[]>
}