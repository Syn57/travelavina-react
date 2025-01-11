import { CardTourPackageItemDomain } from "./CardTourPackageItemDomain";

export interface TourPackageDomain {
    title: string,
    column: number,
    height: number,
    gap: number,
    cardType: string,
    cards: CardTourPackageItemDomain[]
}
