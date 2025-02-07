import { useEffect, useState } from "react";
import container from "../../../../di/Modules";
import { TYPES } from "../../../../di/Types";
import { AssociateDomain } from "../../../../domain/model/assets/AssociateDomain";
import { AssetProviderRepository } from "../../../../domain/repositories/AssetProvideRepository";
import { PAGE_WIDTH_CONFIG } from "../../../../utils/Constants";

const Associates = () => {
    const [associates, setAssociates] = useState<AssociateDomain[]>([])
    useEffect(() => {
        getAssociates(setAssociates);
    }, []);
    return (
      <div className="flex items-center justify-center">
        <div className={`container py-12 ${PAGE_WIDTH_CONFIG}`}>
          <h2 className="text-4xl font-bold text-center mb-12 font-alike">Our Associates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {associates.map((associate) => (
                <img
                  src={associate.image}
                  alt={associate.name}
                  className="max-w-full h-24 object-contain place-self-center"
                />
            ))}
          </div>
        </div>
      </div>
    );
  };

const getAssociates = async (
    onFinishFetchAction: (arg0: AssociateDomain[]) => void 
) => {
    const repository = container.get<AssetProviderRepository>(TYPES.AssetProviderRepository);
    const data = await repository.getAssociatesAssets();
    onFinishFetchAction(data);
}
  
export default Associates;