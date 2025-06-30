import React, { useEffect, useState } from 'react';
import './AnimatedSVG.css';

interface AnimatedSVGProps {
  src: string;
  className?: string;
  animation?: string;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({ src, className, animation }) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    fetch(src)
      .then(response => response.text())
      .then(data => setSvgContent(data))
      .catch(error => console.error('Error loading SVG:', error));
  }, [src]);

  if (!svgContent) return <div className={className} />;

  return (
    <div 
      className={`animated-svg ${className} ${animation ? animation : ''}`}
      dangerouslySetInnerHTML={{ __html: svgContent }} 
    />
  );
};

export default AnimatedSVG;