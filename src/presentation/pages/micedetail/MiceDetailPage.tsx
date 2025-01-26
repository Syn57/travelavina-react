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

const MiceDetailPage = () => {
    const { type } = useParams<{ type: string }>();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [miceDetail, setMiceDetail] = useState<MiceDetailDomain | null>(null);

    useEffect(() => {
        const checkState = async() => {
            if (type) {
                const detail = await getDetailMice(type, setMiceDetail);
                if (detail == null) {
                    navigate("/not-found");
                } else {
                    setLoading(false);
                }
            }
        }
        checkState()
    }, [miceDetail, navigate]);

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
            <ImageBannerStatic title={type.toUpperCase()} img={miceDetail.image} className=""/>
            { miceDetail ?
                <>
                    <TitleDesc title={miceDetail.title} desc={miceDetail.subtitle} />
                    {miceDetail.cards.map((card, index) => (
                        <MiceDetailCardItem key={index} card={card}/>
                    ))}
                    <PromoMiceCard rc_key={miceDetail.promoRCKey} className={""} />
                </>
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