import { Link, useLocation } from 'react-router-dom';
import ic_dropdown_white from '../../assets/icons/ic_chevron_dropdown_white.svg';
import ic_dropdown_blue from '../../assets/icons/ic_chevron_dropdown_blue.svg';
import { useState } from 'react';
import { NAVBAR_HEIGHT } from '../../utils/Constants';

const NavItem = ({ 
    title, 
    route, 
    isHasChild, 
    isChildHovered,
    onClick 
}: { 
  title: string, 
  route: string, 
  isHasChild: boolean, 
  isChildHovered: boolean,
  onClick: () => void 
}) => {

  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = location.pathname === route;

  return (
    <div className={`relative group flex ${NAVBAR_HEIGHT}`} onClick={onClick}>
      <Link
        className={`realtive text-md ${isActive || isChildHovered ? "text-primary" : "text-white"} group-hover:text-primary transition-colors duration-700 font-bold flex items-center px-4`}
        to={route}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="text-center">{title}</p>
        { isHasChild && (
          <div className='relative ms-1 w-4 h-4 flex items-center justify-center mt-1'>
            <img
              src={ic_dropdown_white}
              className={`absolute inset-0 transition-opacity duration-700 ${isActive || isHovered || isChildHovered ? "opacity-0" : "opacity-100"} place-self-center`}
            />
            <img
              src={ic_dropdown_blue}
              className={`absolute inset-0 transition-opacity duration-700 ${isActive || isHovered || isChildHovered ? "opacity-100" : "opacity-0"} place-self-center`}
            />
          </div>
        )}
      </Link>
    </div>
  );
};

export default NavItem;