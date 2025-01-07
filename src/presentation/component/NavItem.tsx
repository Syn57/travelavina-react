import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ title, route }: { title: string; route: string }) => {
  const location = useLocation();
  const isActive = location.pathname === route;
  return (
    <div className="relative group flex items-center">
      <Link
        className={`text-lg ${
          isActive ? "text-primary" : "text-white"
        } group-hover:text-primary transition-colors duration-300 font-poppins text-base font-bold`}
        to={route}>
        <p className="text-center">{title}</p>
      </Link>
    </div>
  );
};

export default NavItem;