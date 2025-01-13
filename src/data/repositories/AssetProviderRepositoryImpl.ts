import headers from "../../configs/headerIconsContent.json";
import navigationChips from "../../configs/navigationChipBar.json"
import tourTypes from "../../configs/tourTypesContent.json"
import associates from "../../configs/assets/associates.json"
import galleryTrips from "../../configs/assets/galleryTrip.json"
import { PREFIX_PATH_ICONS_HEADER } from "../../utils/Constants";
import { getAbsolutePathAsset } from "../../utils/AsetPathHelper";
import { HeaderIconDomain } from "../../domain/model/assets/HeaderIconDomain";
import { AssetProviderRepository } from "../../domain/repositories/AssetProvideRepository";
import { NavigationChipItemDomain } from "../../domain/model/assets/NavigationChipItemDomain";
import { TourTypeDomain } from "../../domain/model/assets/TourTypeDomain";
import { AssociateDomain } from "../../domain/model/assets/AssociateDomain";
import { GalleryTripDomain } from "../../domain/model/assets/GalleryTripDomain";

export class AssetProviderRepositoryImpl implements AssetProviderRepository {
    async getGalleryTripAssets(): Promise<GalleryTripDomain[]> {
        return galleryTrips.map(tourType => ({
            image: tourType.src,
            name: tourType.name
        }));
    }
    async getAssociatesAssets(): Promise<AssociateDomain[]> {
        return associates.map(tourType => ({
            image: tourType.src,
            name: tourType.name
        }));
    }
    async getTourTypeAssets(): Promise<TourTypeDomain[]> {
        return tourTypes.map(tourType => ({
            iconPath: tourType.iconPath,
            title: tourType.title
        }));
    }
    async getHeaderAssets(): Promise<HeaderIconDomain[]> {
        return headers.map(header => ({
            iconPath: getAbsolutePathAsset(PREFIX_PATH_ICONS_HEADER, header.iconPath),
            url: header.url
        }));
    }

    async getNavigationbarAssets(): Promise<NavigationChipItemDomain[]> {
        return navigationChips.map(chip => ({
            title: chip.title,
            route: chip.route
        }));
    };
};
