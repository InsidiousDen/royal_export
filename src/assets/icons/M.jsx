import React from "react";
import { EColors } from "../../shared/styles";
import { Wrapper } from "./Wrapper";

export const M = ({ size, fill }) => {
  return (
    <svg
      width={size ?? 18 + "px"}
      height={size ?? 18 + "px"}
      viewBox="0 0 64 64"
    >
      <path
        d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m14.035 44.508h-5.65V26.882c0-.564.008-1.355.02-2.372c.014-1.018.02-1.802.02-2.353l-5.498 24.351h-5.893l-5.459-24.351c0 .551.006 1.335.02 2.353c.014 1.017.02 1.808.02 2.372v19.626h-5.65V17.492h8.824l5.281 22.814l5.242-22.814h8.725v29.016z"
        fill={fill ?? EColors.greyText}
      ></path>
    </svg>
  );
};
