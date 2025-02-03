import { NavigationBarDataItem } from "../../domain/model/assets/NavigationChipItemDomain";

const NavBarDropdown = ({
    route,
    childNav,
    setHoveredItem,
} : {
    route: string,
    childNav: NavigationBarDataItem[],
    setHoveredItem: (value: string | null) => void
}) => {
    return (
        <div 
            className={`absolute left-0 w-48 bg-white shadow-lg rounded-lg z-50`}
            onMouseEnter={() => setHoveredItem(route)}
            onMouseLeave={() => setHoveredItem(null)}
        >
            {childNav.map((sub) => (
                <a
                    key={sub.route}
                    href={sub.route}
                    className="block px-4 py-2 text-black hover:text-primary rounded-lg"
                    onMouseEnter={() => setHoveredItem(route)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    {sub.title}
                </a>
            ))}
        </div>
    );
}

export default NavBarDropdown;
