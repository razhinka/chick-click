import React from 'react';
import { useSelector } from 'react-redux';
import BuildingCard from '../buildingCard/BuildingCard';
import { 
  selectAllBuildings
} from '../../../../store/features/game/gameSelectors';
import './BuildingsTab.css';

const BuildingsTab: React.FC = () => {
  const buildings = useSelector(selectAllBuildings);

  return (
    <div className="buildings-tab">
      {buildings.map((building, index) => (
        <BuildingCard 
          key={building.id}
          building={building}
        />
      ))}
    </div>
  );
};

export default BuildingsTab;