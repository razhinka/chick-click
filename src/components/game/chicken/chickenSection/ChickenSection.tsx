import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chicken from '../Chicken';
import ScoreDisplay from '../scoreDisplay/ScoreDisplay';
import SPSDisplay from '../spsDisplay/SPSDisplay';
import { incrementScore } from '../../../../store/features/game/gameSlice';
import { selectScore, selectScorePerSecond } from '../../../../store/features/game/gameSelectors'; // Исправленный импорт
import './ChickenSection.css';

const ChickenSection: React.FC = () => {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);
  const sps = useSelector(selectScorePerSecond);
  const clickPower = 1 + sps * 0.1;

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(incrementScore(sps / 10));
    }, 100);

    return () => clearInterval(intervalId);
  }, [dispatch, sps]);

  return (
    <div className="chicken-section">
      <Chicken clickPower={clickPower} />
      <div className="stats-container">
        <ScoreDisplay score={score} />
        <SPSDisplay sps={sps} />
      </div>
    </div>
  );
};

export default ChickenSection;