import { useNavigate } from "react-router";
import { NavigationBarDataItem } from "../../domain/model/assets/NavigationChipItemDomain";

const NavBarDropdown = ({
    route,
    childNav,
    setHoveredItem,
    title
} : {
    route: string,
    childNav: NavigationBarDataItem[],
    setHoveredItem: (value: string | null) => void,
    title: string
}) => {
    const navigate = useNavigate();
    return (
        <div 
            className={`absolute left-0 w-48 bg-white shadow-lg rounded-lg z-50`}
            onMouseEnter={() => setHoveredItem(route)}
            onMouseLeave={() => setHoveredItem(null)}
        >
            {childNav.map((sub) => (
                <a
                    key={sub.title}
                    className="block px-4 py-2 text-black hover:text-primary rounded-lg"
                    onMouseEnter={() => setHoveredItem(route)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => navigate(route, { state: { targetPackage: sub.title } })}
                >
                    {sub.title}
                </a>
            ))}
        </div>
    );
}

export default NavBarDropdown;
