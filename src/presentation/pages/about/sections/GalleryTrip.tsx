import { useEffect, useState } from "react";
import { GalleryTripDomain } from "../../../../domain/model/assets/GalleryTripDomain";
import container from "../../../../di/Modules";
import { AssetProviderRepository } from "../../../../domain/repositories/AssetProvideRepository";
import { TYPES } from "../../../../di/Types";
import { PAGE_WIDTH_CONFIG } from "../../../../utils/Constants";

const GalleryTrip = () => {
    const [galleryTrips, setGalleryTrips] = useState<GalleryTripDomain[]>([])
    useEffect(() => {
        getGalleryTrip(setGalleryTrips);
        console.log(galleryTrips);
    }, []);
    return (
      <div className="flex items-center justify-center">
        <div className={`container ${PAGE_WIDTH_CONFIG}`}>
          <h2 className="text-4xl font-bold text-center mb-12 font-alike">Gallery Trip</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {galleryTrips.map((galleryTrip) => (
                <img
                  src={galleryTrip.image}
                  alt={galleryTrip.name}
                  className="max-w-full h-auto object-contain"
                />
            ))}
          </div>
        </div>
      </div>
    );
  };

const getGalleryTrip = async (
    onFinishFetchAction: (arg0: GalleryTripDomain[]) => void 
) => {
    const repository = container.get<AssetProviderRepository>(TYPES.AssetProviderRepository);
    const data = await repository.getGalleryTripAssets();
    onFinishFetchAction(data);
}
  
export default GalleryTrip;
