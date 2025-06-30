import React from 'react';
import IconButton from '../iconButton/IconButton';
import menuIcon from '../../../assets/svg/icons/menu-icon.svg';
import { useTranslation } from 'react-i18next';
import './MenuButton.css';

interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <IconButton 
      onClick={onClick}
      className="menu-button"
      aria-label={t('menu')}
    >
      <img src={menuIcon} alt={t('menu')} />
    </IconButton>
  );
};

export default MenuButton;