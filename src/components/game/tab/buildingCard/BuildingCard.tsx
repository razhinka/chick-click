import React, { useReducer } from 'react';
import IconButton from '../../../ui/iconButton/IconButton';
import buildingIcon from '../../../../assets/svg/icons/building-icon.svg';
import { useTranslation } from 'react-i18next';
import './BuildingCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { Building, purchaseBuilding } from '../../../../store/features/game/gameSlice';

interface BuildingCardProps {
  building: Building;
}

const BuildingCard: React.FC<BuildingCardProps> = ({ 
  building
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className="building-card">
      <div className="building-icon">
        <img src={buildingIcon} alt="Building"/>
      </div>
      
      <div className="building-info">
        <h3 className="building-name">{building.name}</h3>
        <p className="building-price">{t('cost', {price: building.basePrice * Math.pow(1.15, building.level)})}</p>
        <p className="building-production">{t('produces', {production: building.production})}</p>
      </div>
      
      <IconButton 
        onClick={()=>{dispatch(purchaseBuilding({id: building.id, cost: building.basePrice * Math.pow(1.15, building.level)}))}}
        className="buy-button"
      >
        {t('buy')}
      </IconButton>
    </div>
  );
};

export default BuildingCard;