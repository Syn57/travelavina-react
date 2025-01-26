import { useEffect, useState } from "react";
import HomePageCardItem from "../../../component/HomePageCardItem";
import { PopularDestinationDomain } from "../../../../domain/model/homepage/PopularDestinationDomain";
import container from "../../../../di/Modules";
import { ConfigsProviderRepository } from "../../../../domain/repositories/ConfigsProviderRepository";
import { TYPES } from "../../../../di/Types";

const HomepageCard = () => {
    const [homeCards, setHomeCards] = useState<PopularDestinationDomain[]>([]);
    useEffect(() =>{
        getPopularDestination(setHomeCards);
        console.log("cuk"+homeCards);
    }, []);
    homeCards.map((car) => {
        console.log("card"+car.route);
    });
    console.log("cat"+homeCards[0]);
    if (homeCards.length != 5 && homeCards[0] == undefined) {
        return (
            <>
            </>
        );
    };
    return (
        <>
            <div className="grid grid-cols-2 gap-5 px-80 mt-[40px]">
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
            <div className="grid grid-cols-3 gap-5 px-80 col-span-2 mt-8">
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
        </>
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