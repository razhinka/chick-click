import React, { useState } from 'react';
import GameTabs from '../gameTabs/GameTabs';
import BuildingsTab from '../buildingsTab/BuildingsTab';
import UpgradesTab from '../upgradesTab/UpgradesTab';
import ShopTab from '../shopTab/ShopTab';
import './GameTabsSection.css';

const GameTabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buildings' | 'upgrades' | 'shop'>('buildings');

  return (
    <div className="game-tabs-section">
      <GameTabs activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="tabs-content">
        {activeTab === 'buildings' && <BuildingsTab />}
        {activeTab === 'upgrades' && <UpgradesTab />}
        {activeTab === 'shop' && <ShopTab />}
      </div>
    </div>
  );
};

export default GameTabsSection;