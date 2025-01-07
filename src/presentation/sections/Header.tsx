import ic_email from "../../assets/icons/ic_email.svg"
import container from "../../di/Modules"
import { AssetProviderRepository } from "../../domain/repositories/AssetProvideRepository"
import { TYPES } from "../../di/Types"
import { useEffect, useState } from "react"
import { HeaderIconDomain } from "../../domain/model/assets/HeaderIconDomain"

const Header = ({ className = "" }) => {
  const [headerIcons, setHeaderIcons] = useState<HeaderIconDomain[]>([])
  useEffect(() => {
    getHeaderIcons(setHeaderIcons)
  }, [])
  console.log(ic_email)
  return (
    <div className={`${className} bg-primary py-2 flex px-4 w-full space-x-4 justify-end`}>
        {headerIcons.map((header) => (
            <IconHeader icon={header.iconPath} url={header.url} />
        ))}
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
