import React from 'react';
import egg_pic from '../../../../assets/svg/egg-1.svg'; 
import { useTranslation } from 'react-i18next';
import './ScoreDisplay.css';

interface ScoreDisplayProps {
  score: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
  const { t } = useTranslation();

  return (
    <div className="score-display">
      {score.toLocaleString()} {t('eggs')}
      <img src={egg_pic} alt="Egg" className="egg-icon"/>
    </div>
  );
};

export default ScoreDisplay;