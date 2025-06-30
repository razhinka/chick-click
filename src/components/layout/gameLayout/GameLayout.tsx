import React, { useState } from 'react';
import FarmBackground from '../farmBackground/FarmBackground';
import ChickenSection from '../../game/chicken/chickenSection/ChickenSection';
import GameTabsSection from '../../game/tab/gameTabsSection/GameTabsSection';
import MenuButton from '../../ui/menuButton/MenuButton';
import MainMenu from '../mainMenu/MainMenu';
import './GameLayout.css';

const GameLayout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="game-layout">
      <FarmBackground />
      
      <div className="menu-button-container">
        <MenuButton onClick={() => setIsMenuOpen(true)} />
      </div>
      
      <div className="chicken-section-container">
        <ChickenSection />
      </div>
      
      <div className="tabs-section-container">
        <GameTabsSection />
      </div>
      
      {isMenuOpen && <MainMenu onClose={() => setIsMenuOpen(false)} />}
    </div>
  );
};

export default GameLayout;