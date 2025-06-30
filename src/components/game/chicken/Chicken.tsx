import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementScore } from '../../../store/features/game/gameSlice';
import AnimatedSVG from '../../ui/animatedSVG/AnimatedSVG';
import chickenSVG from '../../../assets/svg/chicken.svg';
import './Chicken.css';

interface ChickenProps {
  clickPower: number; // Сила клика (1/10 от EPS)
}

const Chicken: React.FC<ChickenProps> = ({ clickPower }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('Chicken clicked! Power:', clickPower);
    dispatch(incrementScore(clickPower));
  };

  return (
    <div className="chicken-container" onClick={handleClick}>
      <AnimatedSVG 
        src={chickenSVG} 
        className="chicken-svg"
        animation="bounce"
      />
    </div>
  );
};

export default Chicken;