import { EColors } from "../../shared/styles";

export const Wrapper = ({ children, size, fill }) => {
  return (
    <div>
      <svg
        width={`${size ?? 18}px`}
        height={`${size ?? 18}px`}
        viewBox="0 0 24 24"
        fill={fill ?? EColors.white}
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </div>
  );
};
