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
import OtherCardItem from "../../component/OtherCardItem";
import { PAGE_WIDTH_CONFIG } from "../../../utils/Constants";

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
    if (lainnya === null) return null;
    return (
        <div>
            <NavigationBar />
            <ImageBannerStatic title={lainnya.bannerText.toUpperCase()} img={lainnya.bannerImage} className=""/>
            <PhotosAndDesc photos={lainnya.photos} sectionTitle={lainnya.sectionTitle} sectionDesc={lainnya.sectionDesc} />
            <h1 className="font-abhaya-bold text-3xl font-semibold w-full text-center mt-10">{lainnya.cardTitle}</h1>
            <div className="flex items-center justify-center">
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12 mt-8 ${PAGE_WIDTH_CONFIG}`}>
                    {   lainnya.cards.map((card, index) => {
                            return <OtherCardItem card={card} key={index} />  
                        })
                    }
                </div>
            </div>
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
