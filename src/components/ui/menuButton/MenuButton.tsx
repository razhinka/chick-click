import React from 'react';
import IconButton from '../iconButton/IconButton';
import menuIcon from '../../../assets/svg/icons/menu-icon.svg';
import './MenuButton.css';

interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <IconButton 
      onClick={onClick}
      className="menu-button"
      aria-label="Open menu"
    >
      <img src={menuIcon} alt="Menu"/>
    </IconButton>
  );
};

export default MenuButton;