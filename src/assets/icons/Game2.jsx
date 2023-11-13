import React from "react";
import { EColors } from "../../shared/styles";
import { Wrapper } from "./Wrapper";

export const Game2 = ({ size, fill }) => {
  return (
    <Wrapper size={size}>
      <path
        d="M16.25 14H7.75C6.79 14 6 13.7367 6 13.4167V12.5833C6 12.2633 6.79 12 7.75 12H16.25C17.21 12 18 12.2633 18 12.5833V13.4167C18 13.7367 17.21 14 16.25 14Z"
        fill={fill ?? EColors.greyText}
        stroke={fill ?? EColors.greyText}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.0833 22H4.91667C3.31667 22 2 21.4733 2 20.8333V19.1667C2 18.5267 3.31667 18 4.91667 18H19.0833C20.6833 18 22 18.5267 22 19.1667V20.8333C22 21.4733 20.6833 22 19.0833 22Z"
        fill={fill ?? EColors.greyText}
        stroke={fill ?? EColors.greyText}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 12L10.3008 6.01758"
        stroke={fill ?? EColors.greyText}
        stroke-width="2"
      />
      <circle
        cx="10"
        cy="4"
        r="3"
        fill={fill ?? EColors.greyText}
        stroke={fill ?? EColors.greyText}
        stroke-width="2"
      />
    </Wrapper>
  );
};
