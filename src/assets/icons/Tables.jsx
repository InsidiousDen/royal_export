import React from "react";
import { EColors } from "../../shared/styles";
import { Wrapper } from "./Wrapper";

export const Tables = ({ fill, size }) => {
  return (
    <Wrapper size={size ?? 14}>
      <g fill={fill ?? EColors.greyText} clip-path="url(#a)">
        <path d="M12 0a12 12 0 1 0 12 12A12.015 12.015 0 0 0 12 0Zm0 22.5A10.5 10.5 0 1 1 22.5 12 10.512 10.512 0 0 1 12 22.5Z" />
        <path d="M12 1a10.999 10.999 0 1 0 11 11A11.013 11.013 0 0 0 12 1Zm5.5 12.834a1.827 1.827 0 0 1-1.578-.917h-2.343c-.16.274-.388.503-.662.662v2.343a1.832 1.832 0 1 1-1.834 0v-2.343a1.829 1.829 0 0 1-.662-.662H8.078a1.833 1.833 0 1 1 0-1.833h2.343c.16-.275.388-.503.662-.663V8.08a1.833 1.833 0 1 1 1.834 0v2.342c.274.16.503.388.662.663h2.343a1.83 1.83 0 1 1 1.578 2.75Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill={fill ?? EColors.greyText} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </Wrapper>
  );
};
