import React from 'react';
import AnimatedSVG from '../../ui/animatedSVG/AnimatedSVG';
import farmBackground from '../../../assets/svg/farm-background.svg';
import './FarmBackground.css';

const FarmBackground: React.FC = () => {
  return (
    <div className="farm-background-container">
      <AnimatedSVG 
        src={farmBackground} 
        className="farm-background-svg"
        animation="fadeIn"
      />
    </div>
  );
};

export default FarmBackground;