import React from 'react';
import BuildingCard from '../buildingCard/BuildingCard';
import { useTranslation } from 'react-i18next';
import './BuildingsTab.css';

const BuildingsTab: React.FC = () => {
  const { t } = useTranslation();
  
  const buildings = [
    { id: 1, name: t('chickenCoop'), basePrice: 50, production: 0.5 },
    { id: 2, name: t('eggFarm'), basePrice: 200, production: 2 },
    { id: 3, name: t('hatchery'), basePrice: 1000, production: 10 },
  ];

  return (
    <div className="buildings-tab">
      {buildings.map(building => (
        <BuildingCard 
          key={building.id}
          name={building.name}
          price={building.basePrice}
          production={building.production}
          onPurchase={() => console.log(`Buy ${building.name}`)}
        />
      ))}
    </div>
  );
};

export default BuildingsTab;