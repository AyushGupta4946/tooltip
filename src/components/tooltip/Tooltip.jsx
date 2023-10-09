/* eslint-disable react/prop-types */
import  { useState } from 'react';
import './Tooltip.css'; // Create a separate CSS file for styling

const Tooltip = ({ position, text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  const tooltipClassName = `tooltip tooltip-${position} ${isVisible ? 'visible' : ''}`;

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      <div className={tooltipClassName}>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
