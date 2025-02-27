import { PackageDomain } from "../../../../domain/model/configs/detail/PackagesDomain";
import ic_overview from "../../../../assets/icons/ic_overview.svg"
import ic_include_exclude from "../../../../assets/icons/ic_include_exclude.svg"
import ic_check from "../../../../assets/icons/ic_checklist.svg"
import ic_cross from "../../../../assets/icons/ic_cross.svg"
import Divider from "../../../component/Divider";

const OverviewAndIncludeExclude = ({packageItem} : {packageItem : PackageDomain}) => {
    return (
        <div className="mt-10 mx-5">
            {/* Overview Section */}
            <Divider />
            <div className="mb-8">
                <h4 className="text-2xl mb-3 flex items-center font-alatsi">
                    <img
                        src={ic_overview}
                        alt="Overview Icon"
                        className="h-8 w-8 mr-2"
                    />
                    Overview
                </h4>
                <p className="text-lg leading-relaxed font-alice text-justify mt-2 whitespace-pre-line">{packageItem.overview}</p>
            </div>

            {/* Include & Exclude Section */}
            <Divider />
            <div>
                <h4 className="text-2xl mb-3 flex items-center font-alatsi">
                    <img
                        src={ic_include_exclude}
                        alt="Include & Exclude Icon"
                        className="h-8 w-8 mr-2"
                    />
                    Include & Exclude
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Include List */}
                    <div className="mt-2">
                        <ul className="list-none space-y-2">
                            {packageItem.includeExclude.include.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <img
                                        src={ic_check}
                                        alt="Check Icon"
                                        className="h-5 w-5 mr-2 text-green-500"
                                    />
                                    <span className="text-lg font-alice">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Exclude List */}
                    <div>
                        <ul className="list-none space-y-2">
                            {packageItem.includeExclude.exclude.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <img
                                        src={ic_cross}
                                        alt="Cross Icon"
                                        className="h-5 w-5 mr-2 text-red-500"
                                    />
                                    <span className="text-lg font-alice">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverviewAndIncludeExclude;