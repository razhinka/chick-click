import React from 'react';
import { useTranslation } from 'react-i18next';
import './SPSDisplay.css';

interface SPSDisplayProps {
  sps: number;
}

const SPSDisplay: React.FC<SPSDisplayProps> = ({ sps }) => {
  const { t } = useTranslation();
  
  return (
    <div className="sps-display">
      {/* Передаем count как число */}
      {t('eggsPerSecond', { count: sps })}
    </div>
  );
};

export default SPSDisplay;