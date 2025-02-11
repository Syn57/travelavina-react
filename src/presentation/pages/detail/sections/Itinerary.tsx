import { Card, CardHeader } from "./CardHeader";
import ic_chevron from "../../../../assets/icons/ic_chevron_black_down.svg"
import { PackageDomain } from "../../../../domain/model/configs/detail/PackagesDomain";
import { SchedulePackageItemDomain } from "../../../../domain/model/configs/detail/SchedulePackageItemDomain";
import { useEffect, useRef, useState } from "react";
import { CardContent } from "./CardContent";
import ic_itinerary from "../../../../assets/icons/ic_itinerary.svg"
import Divider from "../../../component/Divider";

const ItineraryCard = ({ sched }: { sched: SchedulePackageItemDomain }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (isExpanded) {
                setContentHeight(contentRef.current.scrollHeight); // Get the full height of the content
            } else {
                setContentHeight(0); // Collapse the content
            }
        }
    }, [isExpanded]);

    return (
        <Card className="mb-4">
            <CardHeader
                className="cursor-pointer flex flex-row items-center justify-between"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <h3 className="text-lg font-alatsi">{sched.title}</h3>
                <img
                    className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    src={ic_chevron}
                />
            </CardHeader>
            <CardContent
                ref={contentRef}
                style={{
                    height: `${contentHeight}px`,
                    transition: 'height 0.3s ease',
                }}
                className="overflow-hidden"
            >
                <div className="space-y-3 px-6 py-4 ">
                    {sched.data.map((data, index) => (
                        <>
                            <li key={index} className="text-bold font-alice font-bold">{data.title}</li>
                            <p key={index} className="text-bold font-alice ms-5">{data.desc}</p>
                        </>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

  
const Itinerary = ({packageItem} : {packageItem : PackageDomain}) => {
    return (
        <div className="mt-10 mx-5">
            <Divider />
            <div className="flex items-center gap-3 mb-6">
                <img className="h-8 w-8 text-white"src={ic_itinerary} />
                <h1 className="text-2xl font-alatsi">Itinerary</h1>
                <div className="ml-auto text-right">
                <h2 className="text-2xl font-alike font-medium">Activity Details</h2>
                </div>
            </div>
            {packageItem.schedule.map((schedule, index) => (
                <ItineraryCard key={index} sched={schedule} />
            ))}
        </div>
    );
};

export default Itinerary;