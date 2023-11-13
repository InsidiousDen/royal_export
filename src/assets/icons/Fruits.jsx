import React from "react";
import { EColors } from "../../shared/styles";
import { Wrapper } from "./Wrapper";

export const Fruits = ({ fill, size }) => {
  return (
    <Wrapper fill={fill ?? EColors.white} size={size}>
      <path
        fill={fill ?? EColors.white}
        d="M 2 17.3 a 4.8 4.8 0 0 0 9.5 0 c 0 -2.6 -2.4 -4.8 -4.8 -2.9 c -2.4 -1.9 -4.8 0.2 -4.8 2.9 Z m 9.5 0 a 4.8 4.8 0 1 0 9.5 0 c 0 -2.6 -2.4 -4.8 -4.8 -2.9 c -2.4 -1.9 -4.8 0.2 -4.8 2.9 Z"
      />
      <path
        stroke={fill ?? EColors.white}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.533"
        d="M 6.8 14.4 C 9.8 11.6 10.8 6.1 11.5 3 c 1.6 2.3 4.7 8.6 4.8 11.4"
      />
      <path
        fill={fill ?? EColors.white}
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.533"
        d="M 21 9.7 c -4.1 0 -6.8 -2.2 -9.5 -6.7 C 16.9 3 21 7.4 21 9.7 Z"
      />
    </Wrapper>
  );
};
