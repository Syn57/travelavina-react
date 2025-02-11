export interface SchedulePackageItemDomain {
    title: string,
    data: SchedulePackageContentDomain[]
}

interface SchedulePackageContentDomain {
    title: string,
    desc: string
}
