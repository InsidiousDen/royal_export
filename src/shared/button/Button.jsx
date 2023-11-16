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
  border,
  borderHover,
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
        padding: `${p ?? pv ?? 0}px ${p ?? ph ?? 0}px`,
        display: "flex",
        border: border
          ? `1px solid ${hover ? borderHover ?? border : border}`
          : "none",
        justifyContent: "center",
        alignItems: "center",
        height: size ?? height ?? 40,
        width: size ?? width ?? "auto",
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
