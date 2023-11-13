import { EColors } from "../../shared/styles";
import { Wrapper } from "./Wrapper";

export const Search = ({ size, fill }) => {
  return (
    <Wrapper size={size}>
      <path
        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
        stroke={fill ?? EColors.greyText}
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Wrapper>
  );
};
