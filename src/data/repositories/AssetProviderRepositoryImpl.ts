import { PREFIX_PATH_ICONS_HEADER, RC_KEY_ASSOCIATES, RC_KEY_GALLERY_TRIP, RC_KEY_NAVIGATION_BAR, RC_KEY_SOCIAL_MEDIA_HEADER, RC_KEY_TOUR_TYPE } from "../../utils/Constants";
import { getAbsolutePathAsset } from "../../utils/AsetPathHelper";
import { HeaderIconDomain } from "../../domain/model/assets/HeaderIconDomain";
import { AssetProviderRepository } from "../../domain/repositories/AssetProvideRepository";
import { NavigationChipItemDomain } from "../../domain/model/assets/NavigationChipItemDomain";
import { TourTypeDomain } from "../../domain/model/assets/TourTypeDomain";
import { AssociateDomain } from "../../domain/model/assets/AssociateDomain";
import { GalleryTripDomain } from "../../domain/model/assets/GalleryTripDomain";
import { fetchRemoteConfig } from "../firebase/FirebaseRemoteConfig";

export class AssetProviderRepositoryImpl implements AssetProviderRepository {
    async getGalleryTripAssets(): Promise<GalleryTripDomain[]> {
        try {
            const jsonString = await fetchRemoteConfig(RC_KEY_GALLERY_TRIP);
            const data: GalleryTripDomain[] = JSON.parse(jsonString);
            return data;
        } catch (error) {
            return [];
        }
    }
    async getAssociatesAssets(): Promise<AssociateDomain[]> {
        try {
            const jsonString = await fetchRemoteConfig(RC_KEY_ASSOCIATES);
            const data: AssociateDomain[] = JSON.parse(jsonString);
            return data;
        } catch (error) {
            return [];
        }
    }
    async getTourTypeAssets(): Promise<TourTypeDomain[]> {
        try {
            const jsonString = await fetchRemoteConfig(RC_KEY_TOUR_TYPE);
            const data: TourTypeDomain[] = JSON.parse(jsonString);
            return data;
        } catch (error) {
            return [];
        }
    }
    async getHeaderAssets(): Promise<HeaderIconDomain[]> {
        try {
            const jsonString = await fetchRemoteConfig(RC_KEY_SOCIAL_MEDIA_HEADER)
            const data: HeaderIconDomain[] = JSON.parse(jsonString);
            return data.map(header => ({
                iconPath: header.iconPath,
                url: header.url
            }));
        } catch (error) {
            return [];
        }
    }
    async getNavigationbarAssets(): Promise<NavigationChipItemDomain[]> {
        try {
            const jsonString = await fetchRemoteConfig(RC_KEY_NAVIGATION_BAR);
            const data: NavigationChipItemDomain[] = JSON.parse(jsonString);
            return data;
        } catch (error) {
            return [];
        }
    };
};
