import { IncludeExcludeDomain } from "./IncludeExcludeDomain";
import { SchedulePackageItemDomain } from "./SchedulePackageItemDomain";

export interface PackageDomain {
    id: string,
    title: string,
    bannerImage: string,
    imageUrl: string,
    packageType: string,
    rating: number,
    bookUrl: string,
    location: string,
    overview: string,
    includeExclude : IncludeExcludeDomain,
    schedule: SchedulePackageItemDomain[],
    photos: string[]
}