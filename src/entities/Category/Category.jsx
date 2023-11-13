import "./styles.css";

import { EColors } from "../../shared/styles";
import { EFonts } from "../../shared/styles/fonts";
import { Text } from "../../shared/text";
import { useState } from "react";

export const Category = ({ item }) => {
  const { name, icon: Icon } = item;
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="category-item cup flex-r"
      key={name}
    >
      <Icon fill={hover ? EColors.yellow : EColors.greyText} size={25} />
      <Text
        wt
        cup
        color={hover ? EColors.yellow : EColors.greyText}
        ff={EFonts.KarlaBold}
      >
        {name}
      </Text>
    </div>
  );
};
