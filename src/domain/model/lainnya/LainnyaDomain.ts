import { LainnyaCardDomain } from "./LainnyaCardDomain";

export interface LainnyaDomain {
    bannerImage: string,
    bannerText: string,
    photos: string[],
    sectionTitle: string,
    sectionDesc: string,
    cardTitle: string,
    cards: LainnyaCardDomain[],
    promoRCKey: string
}
