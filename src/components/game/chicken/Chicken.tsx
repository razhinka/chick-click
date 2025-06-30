import React from 'react';
import AnimatedSVG from '../../ui/animatedSVG/AnimatedSVG';
import chickenSVG from '../../../assets/svg/chicken.svg';
import './Chicken.css';

const Chicken: React.FC = () => {
  const handleClick = () => {
    console.log('Chicken clicked!');
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