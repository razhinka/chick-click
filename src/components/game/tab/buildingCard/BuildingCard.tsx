import React from 'react';
import IconButton from '../../../ui/iconButton/IconButton';
import buildingIcon from '../../../../assets/svg/icons/building-icon.svg';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <div className="building-card">
      <div className="building-icon">
        <img src={buildingIcon} alt="Building"/>
      </div>
      
      <div className="building-info">
        <h3 className="building-name">{name}</h3>
        <p className="building-price">{t('cost', { price })}</p>
        <p className="building-production">{t('produces', { production })}</p>
      </div>
      
      <IconButton 
        onClick={onPurchase}
        className="buy-button"
      >
        {t('buy')}
      </IconButton>
    </div>
  );
};

export default BuildingCard;