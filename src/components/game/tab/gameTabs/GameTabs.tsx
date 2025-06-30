import React from 'react';
import TabButton from '../../../ui/tabButton/TabButton';
import './GameTabs.css';

interface GameTabsProps {
  activeTab: 'buildings' | 'upgrades' | 'shop';
  onTabChange: (tab: 'buildings' | 'upgrades' | 'shop') => void;
}

const GameTabs: React.FC<GameTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="game-tabs-container">
      <TabButton 
        active={activeTab === 'buildings'}
        onClick={() => onTabChange('buildings')}
      >
        Buildings
      </TabButton>
      
      <TabButton 
        active={activeTab === 'upgrades'}
        onClick={() => onTabChange('upgrades')}
      >
        Upgrades
      </TabButton>
      
      <TabButton 
        active={activeTab === 'shop'}
        onClick={() => onTabChange('shop')}
      >
        Shop
      </TabButton>
    </div>
  );
};

export default GameTabs;