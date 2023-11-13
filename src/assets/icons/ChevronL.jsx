import React from "react";
import { EColors } from "../../shared/styles";
import { Wrapper } from "./Wrapper";

export const ChevronL = ({ fill, size }) => {
  return (
    <Wrapper size={size ?? 18}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.62927 0.540023C3.02138 0.15109 3.65454 0.153666 4.04347 0.545775L7.10558 3.6329C7.85391 4.38734 7.85391 5.61266 7.10558 6.3671L4.04347 9.45422C3.65454 9.84633 3.02138 9.84891 2.62927 9.45998C2.23716 9.07104 2.23459 8.43788 2.62352 8.04577L5.64462 5L2.62352 1.95423C2.23459 1.56212 2.23716 0.928956 2.62927 0.540023Z"
        fill={fill ?? EColors.greyText}
      />
    </Wrapper>
  );
};
