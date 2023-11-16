import React, { useState } from "react";

import { EColors } from "../../../shared/styles";
import { EFonts } from "../../../shared/styles/fonts";
import { Text } from "../../../shared/text";

export const DropdownItem = ({ item }) => {
  const { title, count, icon: Icon } = item;
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        cursor: "pointer",
        transition: "all 0.3s ease",
        backgroundColor: hover ? EColors.black : EColors.grey,
        borderRadius: 10,
        padding: "6px 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div className="flex-c" style={{ width: 20 }}>
          <Icon size={16} />
        </div>
        <Text
          ff={EFonts.KarlaRegular}
          color={hover ? EColors.white : EColors.greyText}
          fz={14}
        >
          {title}
        </Text>
      </div>
      <Text
        ff={EFonts.KarlaRegular}
        color={hover ? EColors.white : EColors.greyText}
        fz={14}
      >
        {count}
      </Text>
    </div>
  );
};
