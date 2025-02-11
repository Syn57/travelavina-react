import { useEffect, useState } from "react";
import { TourTypeDomain } from "../../../../domain/model/assets/TourTypeDomain";
import container from "../../../../di/Modules";
import { AssetProviderRepository } from "../../../../domain/repositories/AssetProvideRepository";
import { TYPES } from "../../../../di/Types";

const TourType = () => {
    const [tourTypes, setTourTypes] = useState<TourTypeDomain[]>([]);
    
    useEffect(() => {
        getTourTypes(setTourTypes);
    }, []);

    return (
        <div className="text-center">
            <h2 className="font-alice text-5xl mt-20 mb-16 mx-5">Categories Tour Types</h2>
            <div className="md:flex md:flex-wrap md:justify-center md:gap-16 grid grid-cols-2">
                {tourTypes.map((tour, index) => (
                    <div key={index} className="flex flex-col items-center md:mt-0 mt-8 w-auto">
                        <img
                            src={tour.iconPath}
                            alt={tour.title}
                            className="w-16 h-16"
                        />
                        <span className="text-lg mt-2 font-alice">{tour.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const getTourTypes = async (
    onFinishFetchAction: (arg0: TourTypeDomain[]) => void 
) => {
    const repository = container.get<AssetProviderRepository>(TYPES.AssetProviderRepository);
    const data = await repository.getTourTypeAssets();
    onFinishFetchAction(data);
}

export default TourType;
