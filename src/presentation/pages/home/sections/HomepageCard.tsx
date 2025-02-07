import { useEffect, useState } from "react";
import HomePageCardItem from "../../../component/HomePageCardItem";
import { PopularDestinationDomain } from "../../../../domain/model/homepage/PopularDestinationDomain";
import container from "../../../../di/Modules";
import { ConfigsProviderRepository } from "../../../../domain/repositories/ConfigsProviderRepository";
import { TYPES } from "../../../../di/Types";
import { PAGE_WIDTH_CONFIG } from "../../../../utils/Constants";

const HomepageCard = () => {
    const [homeCards, setHomeCards] = useState<PopularDestinationDomain[]>([]);
    
    useEffect(() =>{
        getPopularDestination(setHomeCards);
    }, []);

    if (homeCards.length != 5 && homeCards[0] == undefined) {
        return (
            <>
            </>
        );
    };
    return (
        <div className={`flex flex-col items-center justify-center`}>
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-5 mt-[40px] ${PAGE_WIDTH_CONFIG} self-center px-5 xl:px-0`}>
                {/* First Row: Two Items */}
                <HomePageCardItem 
                    card={homeCards[0]}
                    className="col-span-1"
                />
                <HomePageCardItem 
                    card={homeCards[1]}
                    className="col-span-1"
                />
                    
            </div>
            {/* Second Row: Three Items */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 col-span-2 mt-8 ${PAGE_WIDTH_CONFIG} self-center px-5 xl:px-0`}>
                <HomePageCardItem 
                    card={homeCards[2]}
                    className=""
                />
                <HomePageCardItem 
                    card={homeCards[3]}
                    className=""
                />
                <HomePageCardItem 
                    card={homeCards[4]}
                    className=""
                />
            </div>
        </div>
    );
};

const getPopularDestination = async (
    onFinishFetchAction: (arg0: PopularDestinationDomain[]) => void
) => {
    const repository = container.get<ConfigsProviderRepository>(TYPES.ConfigsProviderRepository);
    const data = await repository.getPopularDestination();
    onFinishFetchAction(data);
};

export default HomepageCard;
