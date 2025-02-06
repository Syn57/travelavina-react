import container from "../../di/Modules";
import { MiceCardDomain } from "../../domain/model/mice/MiceCardDomain";
import { useNavigate } from "react-router";
import { ConfigsProviderRepository } from "../../domain/repositories/ConfigsProviderRepository";
import { TYPES } from "../../di/Types";
import { useEffect, useState } from "react";
import { PAGE_WIDTH_CONFIG } from "../../utils/Constants";

const PromoMiceCard = ({ className="" , rc_key} : {className: string, rc_key:string}) => {
    const [promoCard, setPromoCard] = useState<MiceCardDomain | null>(null);
    const handleClick = () => {
        window.open(promoCard.route, "_blank");
    };
    useEffect(() => {
        getPromoMiceCard(setPromoCard, rc_key);
    });

    if (promoCard == null || promoCard == undefined) {
        return (
            <></>
        );
    };

    return (
        <div className="flex items-center justify-center">
            <div className={`relative h-64 overflow-hidden ${PAGE_WIDTH_CONFIG} mt-10 rounded-3xl`}>
            <img src={promoCard.image} className="w-full h-full object-cover" alt={promoCard.title} />  
            <div className="absolute inset-0 bg-primary bg-opacity-70 w-full">
                <div className={`absolute bottom-0 flex w-full h-full items-center`}>
                    <div className="justify-self-start w-1/2 ms-16">
                        {promoCard.title.length > 0 && (
                            <h2 className="text-white text-4xl font-extrabold mb-2 font-alike">{promoCard.title}</h2>
                        )}
                        <p className="text-white text-lg font-alice">{promoCard.subtitle}</p>
                    </div>
                    <div className="w-1/2 flex justify-end me-16">
                        <button onClick={handleClick} className="py-2 px-6 bg-ternary text-white rounded-3xl shadow font-alice hover:bg-blue-600 w-[160px]">
                            {promoCard.btnText}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
};

const getPromoMiceCard = async (
    onFinishFetchAction: (arg0: MiceCardDomain) => void,
    key: string 
) => {
    const repository = container.get<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository);
    const data = await repository.getPromoMiceCard(key);
    onFinishFetchAction(data);
}

export default PromoMiceCard;
