import React, { useState } from "react";
import classNames from "classnames";

const Tooltip = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const tooltipClasses = classNames("tooltip", {
    "opacity-100": showTooltip,
    "opacity-0": !showTooltip,
    "pointer-events-none": !showTooltip,
  });

  const tooltipTextClasses = classNames("tooltip-text", {
    "opacity-100": showTooltip,
    "opacity-0": !showTooltip,
  });

  return (
    <div
      className="inline-block relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className={tooltipClasses}>
        <div className={tooltipTextClasses}>{text}</div>
      </div>
    </div>
  );
};

export default Tooltip;
