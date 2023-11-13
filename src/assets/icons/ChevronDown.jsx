import React from "react";
import { EColors } from "../../shared/styles";

export const ChevronDown = ({ fill, size }) => {
  return (
    <svg
      width={size ?? "18px"}
      height={size ?? "18px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke={fill ?? EColors.greyText}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
