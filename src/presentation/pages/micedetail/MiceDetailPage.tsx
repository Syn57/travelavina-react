import { useNavigate, useParams } from "react-router";
import ImageBannerStatic from "../../sections/ImageBannerStatic";
import NavigationBar from "../../sections/NavigationBar";
import { MiceDetailDomain } from "../../../domain/model/micedetail/MiceDetailDomain";
import container from "../../../di/Modules";
import { ConfigsProviderRepository } from "../../../domain/repositories/ConfigsProviderRepository";
import { TYPES } from "../../../di/Types";
import { useEffect, useState } from "react";
import TitleDesc from "../../sections/TitleDesc";
import MiceDetailCardItem from "../../component/MiceDetailCardItem";
import PromoMiceCard from "../../component/PromoMiceCard";
import { PAGE_WIDTH_CONFIG } from "../../../utils/Constants";

const MiceDetailPage = () => {
    const { type } = useParams<{ type: string }>();
    const navigate = useNavigate();
    const [miceDetail, setMiceDetail] = useState<MiceDetailDomain | null>(null);

    useEffect(() => {
        const checkState = async() => {
            if (type) {
                const detail = await getDetailMice(type, setMiceDetail);
                if (!detail) {
                    navigate(`/${type}`);
                }
            }
        }
        checkState()
    }, [miceDetail, navigate]);
    if (miceDetail === null) return null;
    
    return (
        <div className="relative">
            <NavigationBar />
            <ImageBannerStatic title={type.toUpperCase()} img={miceDetail.image} className=""/>
            { miceDetail ?
                <div className="flex items-center justify-center">
                    <div className={`${PAGE_WIDTH_CONFIG}`}>
                        <TitleDesc title={miceDetail.title} desc={miceDetail.subtitle} />
                            {miceDetail.cards.map((card, index) => (
                                <MiceDetailCardItem key={index} card={card}/>
                            ))}
                        <PromoMiceCard rc_key={miceDetail.promoRCKey} className={""} />
                    </div>
                </div>
                : null
            }
        </div>
    );
}

async function getDetailMice(
    type: string,
    onFinishFetchAction: (arg0: MiceDetailDomain | null) => void 
) : Promise<boolean> {
    const repository = container.get<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository);
    const data = await repository.getMiceDetail(type);
    onFinishFetchAction(data);
    return data != null;
}

export default MiceDetailPage;