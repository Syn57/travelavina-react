import container from "../../di/Modules"
import { AssetProviderRepository } from "../../domain/repositories/AssetProvideRepository"
import { TYPES } from "../../di/Types"
import { useEffect, useState } from "react"
import { HeaderIconDomain } from "../../domain/model/assets/HeaderIconDomain"
import { PAGE_WIDTH_CONFIG } from "../../utils/Constants"

const Header = ({ className = "" }) => {
  const [headerIcons, setHeaderIcons] = useState<HeaderIconDomain[]>([])
  useEffect(() => {
    getHeaderIcons(setHeaderIcons)
  }, [])
  if (headerIcons.length == 0) return null;
  return (
    <div className={`${className} bg-primary w-full flex items-center justify-center `}>
      <div className={`${PAGE_WIDTH_CONFIG} flex py-2 space-x-4 justify-end`}>
      {headerIcons.map((header, index) => (
            <IconHeader icon={header.iconPath} url={header.url} key={index} />
        ))}
      </div>
    </div>
  );
};

const IconHeader = ({ url, icon }: { url: string; icon: string }) => {
    return (
        <a href={url}>
            <img className="h-6 w-6" src={`${icon}`} alt="Social Media Icon" />
        </a>
    );
};

const getHeaderIcons = async (onFinishFetchAction : (arg0: HeaderIconDomain[]) => void) => {
  const repository = container.get<AssetProviderRepository>(TYPES.AssetProviderRepository);
  const data = await repository.getHeaderAssets();
  onFinishFetchAction(data);
};

export default Header;
