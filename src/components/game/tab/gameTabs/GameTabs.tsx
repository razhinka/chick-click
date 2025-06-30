import React from 'react';
import TabButton from '../../../ui/tabButton/TabButton';
import { useTranslation } from 'react-i18next';
import './GameTabs.css';

interface GameTabsProps {
  activeTab: 'buildings' | 'upgrades' | 'shop';
  onTabChange: (tab: 'buildings' | 'upgrades' | 'shop') => void;
}

const GameTabs: React.FC<GameTabsProps> = ({ activeTab, onTabChange }) => {
  const { t } = useTranslation();

  return (
    <div className="game-tabs-container">
      <TabButton 
        active={activeTab === 'buildings'}
        onClick={() => onTabChange('buildings')}
      >
        {t('buildings')}
      </TabButton>
      
      <TabButton 
        active={activeTab === 'upgrades'}
        onClick={() => onTabChange('upgrades')}
      >
        {t('upgrades')}
      </TabButton>
      
      <TabButton 
        active={activeTab === 'shop'}
        onClick={() => onTabChange('shop')}
      >
        {t('shop')}
      </TabButton>
    </div>
  );
};

export default GameTabs;