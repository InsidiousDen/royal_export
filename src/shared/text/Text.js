import { EColors } from "../styles";
import { EFonts } from "../styles/fonts";
import { useState } from "react";

export const Text = ({
  fz,
  ff,
  color,
  children,
  cup,
  hoverColor,
  wt,
  style,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <p
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...style,
        transition: wt ? "none" : "color 0.3s ease",
        cursor: cup ? "pointer" : "auto",
        fontSize: fz ?? 12,
        fontFamily: ff ?? EFonts.KarlaRegular,
        color: hover
          ? hoverColor ?? color ?? EColors.white
          : color ?? EColors.white,
      }}
    >
      {children}
    </p>
  );
};
