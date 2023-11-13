import { useState } from "react";
import { EColors } from "../styles";
import { EFonts } from "../styles/fonts";
import { Text } from "../text/Text";

export const Button = ({
  children,
  bgColor,
  textColor,
  pv,
  ph,
  p,
  height,
  width,
  size,
  radius,
  onClick,
  className,
  hoverColor,
  text,
  textHoverColor,
  fz,
  ff,
}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={className ?? ""}
      onClick={() => (onClick ? onClick() : () => {})}
      style={{
        transition: "all ease 0.3s",
        cursor: "pointer",
        backgroundColor: hover
          ? hoverColor ?? bgColor ?? EColors.grey
          : bgColor ?? EColors.grey,
        paddingLeft: ph ?? 15,
        paddingRight: ph ?? 15,
        paddingTop: pv ?? 15,
        paddingBottom: pv ?? 15,
        padding: p ?? 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: size ?? height ?? 40,
        width: size ?? width ?? 40,
        borderRadius: radius ?? 10,
      }}
    >
      {children}
      {text && (
        <Text
          cup
          color={
            hover
              ? textHoverColor
                ? textHoverColor
                : textColor ?? EColors.white
              : textColor ?? EColors.white
          }
          fz={fz ?? 14}
          ff={ff ?? EFonts.KarlaBold}
        >
          {text}
        </Text>
      )}
    </div>
  );
};
