import React from 'react';
import './SPSDisplay.css';

interface SPSDisplayProps {
  sps: number;
}

const SPSDisplay: React.FC<SPSDisplayProps> = ({ sps }) => {
  return (
    <div className="sps-display">
      {sps.toFixed(1)} eggs/second
    </div>
  );
};

export default SPSDisplay;