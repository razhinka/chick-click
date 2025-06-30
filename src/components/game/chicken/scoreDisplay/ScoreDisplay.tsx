import React from 'react';
import egg_pic from '../../../../assets/svg/egg-1.svg'; 
import './ScoreDisplay.css';

interface ScoreDisplayProps {
  score: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score }) => {
  return (
    <div className="score-display">
      {score.toLocaleString()} Eggs
      <img src={egg_pic} alt="Egg" className="egg-icon"/>
    </div>
  );
};

export default ScoreDisplay;