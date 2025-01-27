import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { LainnyaDomain } from "../../../domain/model/lainnya/LainnyaDomain";
import container from "../../../di/Modules";
import { ConfigsProviderRepository } from "../../../domain/repositories/ConfigsProviderRepository";
import { TYPES } from "../../../di/Types";
import NavigationBar from "../../sections/NavigationBar";
import ImageBannerStatic from "../../sections/ImageBannerStatic";
import PhotosAndDesc from "./section/PhotosAndDesc";
import PromoMiceCard from "../../component/PromoMiceCard";

const LainnyaPage = () => {
    const { type } = useParams<{ type: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [lainnya, setLainnya] = useState<LainnyaDomain | null>(null);

    useEffect(() => {
        const checkState = async() => {
            if (type) {
                const detail = await getlainnyaPage(type, setLainnya);
                if (detail == null) {
                    navigate("/not-found");
                } else {
                    setLoading(false);
                }
            }
        }
        checkState()
    }, [lainnya, navigate]);

    if (loading) {
        return (
            <div className="relative">
                <NavigationBar />
                <div className="loading-spinner">Loading...</div>
            </div>
        );
    }
    
    return (
        <div>
            <NavigationBar />
            <ImageBannerStatic title={lainnya.bannerText.toUpperCase()} img={lainnya.bannerImage} className=""/>
            <PhotosAndDesc photos={lainnya.photos} sectionTitle={lainnya.sectionTitle} sectionDesc={lainnya.sectionDesc} />
            <h1 className="font-abhaya-bold text-3xl font-semibold w-full text-center mt-10">{lainnya.cardTitle}</h1>
             {/* TODO: Make cards */}
            <PromoMiceCard rc_key={lainnya.promoRCKey} className={""} />
        </div>
    );
};

async function getlainnyaPage(
    type: string,
    onFinishFetchAction: (arg0: LainnyaDomain | null) => void 
) : Promise<boolean> {
    const repository = container.get<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository);
    const data = await repository.getLainnyaPage(type);
    onFinishFetchAction(data);
    return data != null;
}

export default LainnyaPage;
