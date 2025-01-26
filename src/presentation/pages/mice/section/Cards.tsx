import { useEffect, useState } from "react";
import { MiceCardDomain } from "../../../../domain/model/mice/MiceCardDomain";
import container from "../../../../di/Modules";
import { ConfigsProviderRepository } from "../../../../domain/repositories/ConfigsProviderRepository";
import MiceCardItem from "../../../component/MiceCardItem";
import { TYPES } from "../../../../di/Types";

const Cards = () => {
    const [miceCards, setMiceCards] = useState<MiceCardDomain[]>([]);

    useEffect(() => {
        getMiceCard(setMiceCards);
    }, []);

    return (
        <div className="md:mx-80 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {miceCards.map((card, index) => (
                    <MiceCardItem
                        key={index}
                        card={card} 
                        className={""}                
                    /> 
                ))}
            </div>
        </div>
    );
}

const getMiceCard = async (
    onFinishFetchAction: (arg0: MiceCardDomain[]) => void 
) => {
    const repository = container.get<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository);
    const data = await repository.getMiceCard();
    onFinishFetchAction(data);
}

export default Cards;