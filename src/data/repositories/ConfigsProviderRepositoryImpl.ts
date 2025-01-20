import { TourPackageDomain } from "../../domain/model/configs/TourPackageDomain";
import { ConfigsProviderRepository } from "../../domain/repositories/ConfigsProviderRepository";
import tourPackages from "../../configs/tourPackagesConfigs.json"
import packages from "../../configs//content/packages.json"
import { PackageDomain } from "../../domain/model/configs/detail/PackagesDomain";

export class ConfigsProviderRepositoryImpl implements ConfigsProviderRepository {
    async getDetailPackage(id: string): Promise<PackageDomain | null> {
        return packages.find(p => p.id === id) || null;
    }
    async getTourPackageConfigs(): Promise<TourPackageDomain[]> {
        return tourPackages.map(tourPackageDomain =>({
            title: tourPackageDomain.title,
            column: tourPackageDomain.column,
            height: tourPackageDomain.height,
            gap: tourPackageDomain.gap,
            cardType: tourPackageDomain.card_type,
            cards: tourPackageDomain.cards.map(card => ({
                title: card.title,
                image: card.image,
                route: card.route
            }))
        }));
    };
}
