import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavigationBar from "../../sections/NavigationBar";
import ImageBannerStatic from "../../sections/ImageBannerStatic";
import { ConfigsProviderRepository } from "../../../domain/repositories/ConfigsProviderRepository";
import { TYPES } from "../../../di/Types";
import container from "../../../di/Modules";
import { PackageDomain } from "../../../domain/model/configs/detail/PackagesDomain";
import ImageAndTitle from "./sections/ImageAndTitle";
import OverviewAndIncludeExclude from "./sections/OverviewAndIncludeExclude";
import Itinerary from "./sections/Itinerary";
import Documentation from "./sections/Documentation";
import { PAGE_WIDTH_CONFIG } from "../../../utils/Constants";

const DetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [packageItem, setPackage] = useState<PackageDomain | null>(null);
    useEffect(() => {
        const checkState = async() => {
            if (id) {
                const pack = await getPackageItem(id, setPackage);
                if (!pack) {
                    navigate(`/${id}`);
                }
            }
        }
        checkState()
    }, [packageItem]);
    if (packageItem === null) return null;
    return (
        <div className="relative">
            <NavigationBar />
            <ImageBannerStatic title={`${packageItem?.packageType}`} img={packageItem.bannerImage} className=""/>
            { packageItem ? 
                <div className="flex items-center justify-center"> 
                    <div className={`${PAGE_WIDTH_CONFIG}`}>
                        <ImageAndTitle packageItem={packageItem} />
                        <OverviewAndIncludeExclude packageItem={packageItem} />
                        <Itinerary packageItem={packageItem} />
                        <Documentation packageItem={packageItem}/>
                    </div>
                </div>
                : null}
        </div>
    );
};

async function getPackageItem(
    id: string,
    onFinishFetchAction: (arg0: PackageDomain | null) => void 
) : Promise<boolean> {
    const repository = container.get<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository);
    const data = await repository.getDetailPackage(id);
    onFinishFetchAction(data);
    return data != null;
}

export default DetailPage;