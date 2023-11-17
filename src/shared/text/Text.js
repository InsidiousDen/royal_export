import { EColors } from "../styles";
import { EFonts } from "../styles/fonts";
import { useState } from "react";

export const Text = ({
  fz,
  onClick,
  ff,
  lh,
  color,
  children,
  cup,
  hoverColor,
  wt,
  style,
  whiteSpace,
  underline,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <p
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...style,
        whiteSpace: whiteSpace ?? "normal",
        textDecoration: underline ? "underline" : "none",
        transition: wt ? "none" : "color 0.3s ease",
        cursor: cup ? "pointer" : "auto",
        lineHeight: lh + "px" ?? fz + 2 + "px" ?? 14,
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
