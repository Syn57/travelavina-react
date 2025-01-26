import { MiceDetailCardItemDomain } from "./MiceDetailCardItemDomain";

export interface MiceDetailDomain {
    title: string,
    subtitle: string,
    promoRCKey: string,
    image: string,
    cards: MiceDetailCardItemDomain[]
}