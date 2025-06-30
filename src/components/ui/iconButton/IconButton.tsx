import React, { ReactNode } from 'react';
import './IconButton.css';

interface IconButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ 
  onClick, 
  children, 
  className = '', 
  ariaLabel 
}) => {
  return (
    <button
      onClick={onClick}
      className={`icon-button ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default IconButton;