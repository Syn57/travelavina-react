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

const DetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [packageItem, setPackage] = useState<PackageDomain | null>(null);
    useEffect(() => {
        const checkState = async() => {
            if (id) {
                const pack = await getPackageItem(id, setPackage);
                if (!pack) {
                    navigate("/not-found");
                } else {
                    setLoading(false);
                }
            }
        }
        checkState()
    }, [packageItem, navigate]);

    if (loading) {
        return (
            <div className="relative">
                <NavigationBar />
                <div className="loading-spinner">Loading...</div>
            </div>
        );
    }
    return (
        <div className="relative">
            <NavigationBar />
            <ImageBannerStatic title={`${packageItem?.packageType}`} img="/src/assets/images/slider-banner-3.jpg" className=""/>
            { packageItem ? 
                <>
                    <ImageAndTitle packageItem={packageItem} />
                    <OverviewAndIncludeExclude packageItem={packageItem} />
                    <Itinerary packageItem={packageItem} />
                    <Documentation packageItem={packageItem}/>
                </>
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