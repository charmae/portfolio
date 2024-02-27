import * as React from "react";
import  '../../globals.css'

export interface ITooltipProps {
  position: string;
  message: any;
}

export function SkillTooltip({ message, position }: ITooltipProps) {
  return (
    <div>
      <span className={`tooltip tooltip-${position}`}>{message}</span>
    </div>
  );
}