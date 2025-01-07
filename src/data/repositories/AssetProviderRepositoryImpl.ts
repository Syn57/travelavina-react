import headers from "../../configs/headerIconsContent.json";
import navigationChips from "../../configs/navigationChipBar.json"
import { PREFIX_PATH_ICONS_HEADER } from "../../utils/Constants";
import { getAbsolutePathAsset } from "../../utils/AsetPathHelper";
import { HeaderIconDomain } from "../../domain/model/assets/HeaderIconDomain";
import { AssetProviderRepository } from "../../domain/repositories/AssetProvideRepository";
import { NavigationChipItemDomain } from "../../domain/model/assets/NavigationChipItemDomain";

export class AssetProviderRepositoryImpl implements AssetProviderRepository {
    async getHeaderAssets(): Promise<HeaderIconDomain[]> {
        return headers.map(header => ({
            iconPath: getAbsolutePathAsset(PREFIX_PATH_ICONS_HEADER, header.iconPath),
            url: header.url
        }));
    }

    async getNavigationbarAssets(): Promise<NavigationChipItemDomain[]> {
        return navigationChips.map(chip => ({
            title: chip.title,
            route: chip.route
        }));
    }
}
