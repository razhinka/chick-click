import React from 'react';
import IconButton from '../../../ui/iconButton/IconButton';
import buildingIcon from '../../../../assets/svg/icons/building-icon.svg';
import './BuildingCard.css';

interface BuildingCardProps {
  name: string;
  price: number;
  production: number;
  onPurchase: () => void;
}

const BuildingCard: React.FC<BuildingCardProps> = ({ 
  name, 
  price, 
  production, 
  onPurchase 
}) => {
  return (
    <div className="building-card">
      <div className="building-icon">
        <img src={buildingIcon} alt="Building"/>
      </div>
      
      <div className="building-info">
        <h3 className="building-name">{name}</h3>
        <p className="building-price">Cost: {price} eggs</p>
        <p className="building-production">Produces: {production}/s</p>
      </div>
      
      <IconButton 
        onClick={onPurchase}
        className="buy-button"
      >
        Buy
      </IconButton>
    </div>
  );
};

export default BuildingCard;