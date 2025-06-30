import React from 'react';
import BuildingCard from '../buildingCard/BuildingCard';
import './BuildingsTab.css';

const buildings = [
  { id: 1, name: 'Chicken Coop', basePrice: 50, production: 0.5 },
  { id: 2, name: 'Egg Farm', basePrice: 200, production: 2 },
  { id: 3, name: 'Hatchery', basePrice: 1000, production: 10 },
];

const BuildingsTab: React.FC = () => {
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