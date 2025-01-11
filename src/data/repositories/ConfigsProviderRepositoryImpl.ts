import { TourPackageDomain } from "../../domain/model/configs/TourPackageDomain";
import { ConfigsProviderRepository } from "../../domain/repositories/ConfigsProviderRepository";
import tourPackages from "../../configs/tourPackagesConfigs.json"

export class ConfigsProviderRepositoryImpl implements ConfigsProviderRepository {
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
