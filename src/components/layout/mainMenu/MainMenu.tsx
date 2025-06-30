import React from 'react';
import { useTranslation } from 'react-i18next';
import './MainMenu.css';

interface MainMenuProps {
  onClose: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="main-menu-overlay">
      <div className="main-menu-content">
        <div className="menu-header">
          <h2>{t('gameMenu')}</h2>
          <button 
            onClick={onClose}
            className="close-button"
            aria-label={t('close')}
          >
            ✕
          </button>
        </div>
        
        <div className="menu-options">
          <button className="menu-option">{t('statistics')}</button>
          <button className="menu-option">{t('settings')}</button>
          <button className="menu-option">{t('achievements')}</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;