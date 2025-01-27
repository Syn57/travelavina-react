import { TourPackageDomain } from "../../domain/model/configs/TourPackageDomain";
import { ConfigsProviderRepository } from "../../domain/repositories/ConfigsProviderRepository";
import { PackageDomain } from "../../domain/model/configs/detail/PackagesDomain";
import { fetchRemoteConfig } from "../firebase/FirebaseRemoteConfig";
import { SliderBannerDomain } from "../../domain/model/homepage/SliderBannerDomain";
import { PopularDestinationDomain } from "../../domain/model/homepage/PopularDestinationDomain";
import { MiceCardDomain } from "../../domain/model/mice/MiceCardDomain";
import RecommendedPackageDomain from "../../domain/model/homepage/RecommendedPackageDomain";
import { MiceDetailDomain } from "../../domain/model/micedetail/MiceDetailDomain";
import { 
    RC_KEY_DETAIL_PACKAGES,
    RC_KEY_MICE,
    RC_KEY_POPULAR_DESTINATION, 
    RC_KEY_RECOMMENDED_PACKAGE, 
    RC_KEY_SLIDER_BANNER, 
    RC_KEY_TOUR_PACKAGES
} from "../../utils/Constants";
import { LainnyaDomain } from "../../domain/model/lainnya/LainnyaDomain";

export class ConfigsProviderRepositoryImpl implements ConfigsProviderRepository {
    async getLainnyaPage(key: string): Promise<LainnyaDomain | null> {
        try {
            const jsonString = await fetchRemoteConfig(key);
            const data: LainnyaDomain = JSON.parse(jsonString);
            return data;
        } catch (error) {
            return null;
        }
    }

    async getMiceDetail(key: string): Promise<MiceDetailDomain | null> {
        try {
            const jsonString = await fetchRemoteConfig(key);
            const data: MiceDetailDomain = JSON.parse(jsonString);
            return data;
        } catch (error) {
            return null;
        }
    }

    async getPromoMiceCard(key: string): Promise<MiceCardDomain | null> {
        try {
            const jsonString = await fetchRemoteConfig(key);
            const data: MiceCardDomain = JSON.parse(jsonString);
            return data;
        } catch (error) {
            return null;
        }
    }

    async getMiceCard(): Promise<MiceCardDomain[]> {
        try {
            const jsonString = await fetchRemoteConfig(RC_KEY_MICE);
            const data: MiceCardDomain[] = JSON.parse(jsonString);
            return data;
        } catch (error) {
            return [];
        }
    }

    async getRecommendedPackage(): Promise<RecommendedPackageDomain[]> {
        try {
            const jsonString = await fetchRemoteConfig(RC_KEY_RECOMMENDED_PACKAGE);
            const data: RecommendedPackageDomain[] = JSON.parse(jsonString);
            return data;
        } catch (error) {
            return [];
        }
    }

    async getPopularDestination(): Promise<PopularDestinationDomain[]> {
        try {
            const jsonString = await fetchRemoteConfig(RC_KEY_POPULAR_DESTINATION);
            const data: PopularDestinationDomain[] = JSON.parse(jsonString);
            return data;
        } catch (error) {
            return [];
        }
    }

    async getSliderBanner(): Promise<SliderBannerDomain[]> {
        try {
            const jsonString = await fetchRemoteConfig(RC_KEY_SLIDER_BANNER);
            const data: SliderBannerDomain[] = JSON.parse(jsonString);
            return data;
        } catch (error) {
            return [];
        }
    }

    async getDetailPackage(id: string): Promise<PackageDomain | null> {
        try {
            const jsonString = await fetchRemoteConfig(RC_KEY_DETAIL_PACKAGES);
            const data: PackageDomain[] = JSON.parse(jsonString);
            return data.find(p => p.id === id) || null;
        } catch (error) {
            return null;
        }
    }

    async getTourPackageConfigs(): Promise<TourPackageDomain[]> {
        try {
            const jsonString = await fetchRemoteConfig(RC_KEY_TOUR_PACKAGES);
            const data: TourPackageDomain[] = JSON.parse(jsonString);
            return data;
        } catch (error) {
            return [];
        }
    };
}
