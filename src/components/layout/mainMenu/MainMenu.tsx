import React from 'react';
import './MainMenu.css';

interface MainMenuProps {
  onClose: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onClose }) => {
  return (
    <div className="main-menu-overlay">
      <div className="main-menu-content">
        <div className="menu-header">
          <h2>Game Menu</h2>
          <button 
            onClick={onClose}
            className="close-button"
          >
            ✕
          </button>
        </div>
        
        <div className="menu-options">
          <button className="menu-option">Statistics</button>
          <button className="menu-option">Settings</button>
          <button className="menu-option">Achievements</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;