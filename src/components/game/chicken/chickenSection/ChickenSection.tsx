import React from 'react';
import Chicken from '../Chicken';
import ScoreDisplay from '../scoreDisplay/ScoreDisplay';
import SPSDisplay from '../spsDisplay/SPSDisplay';
import './ChickenSection.css';

const ChickenSection: React.FC = () => {
  const score = 1000;
  const scorePerSecond = 5.2;

  return (
    <div className="chicken-section">
      <Chicken />
      <div className="stats-container">
        <ScoreDisplay score={score} />
        <SPSDisplay sps={scorePerSecond} />
      </div>
    </div>
  );
};

export default ChickenSection;