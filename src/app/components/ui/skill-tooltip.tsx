import * as React from "react";
import { useState } from "react";

import "../../globals.css";

export interface ITooltipProps {
  position: string;
  message: any;
  label: string;
}

export function SkillTooltip({ label, message, position }: ITooltipProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="inline-block z-10"
      onClick={() => setShowTooltip(!showTooltip)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {label}
      {showTooltip && (
        <span className={`tooltip tooltip-${position}`}>{message}</span>
      )}
    </div>
  );
}
