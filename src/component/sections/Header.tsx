import ic_facebook from "../../assets/icons/ic_facebook.svg"
import ic_whatsapp from "../../assets/icons/ic_whatsapp.svg"
import ic_twitter from "../../assets/icons/ic_twitter.svg"
import ic_email from "../../assets/icons/ic_email.svg"
import ic_instagram from "../../assets/icons/ic_instagram.svg"
import { getWcmsValue } from "../../utils/WcmsHelper"
import { EMAIL_LINK, FACEBOOK_LINK, INSTAGRAM_LINK, WHATSAPP_LINK } from "../../utils/WcmsConstants"

const Header = ({ className = "" }) => {
    const iconsSocmed: [string, string][] = [
        [ic_instagram, getWcmsValue(INSTAGRAM_LINK)],
        [ic_facebook, getWcmsValue(FACEBOOK_LINK)],
        [ic_whatsapp, getWcmsValue(WHATSAPP_LINK)],
        [ic_email, getWcmsValue(EMAIL_LINK)],
    ];
  return (
    <div className={`bg-[#2C3C7C] text-white py-2 flex px-4 ${className}`}>
      <div className="flex w-full space-x-4 justify-end">
        {iconsSocmed.map(([icon, link], _) => (
            <IconHeader icon={icon} url={link} />
        ))}
      </div>
    </div>
  );
};

const IconHeader = ({ url, icon }: { url: string; icon: string }) => {
    return (
        <a href={url}>
            <img className="h-6 w-6" src={icon} alt="Social Media Icon" />
        </a>
    );
};

export default Header;
