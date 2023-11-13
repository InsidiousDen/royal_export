import { EColors } from "../../shared/styles";
import { EFonts } from "../../shared/styles/fonts";
import React from "react";
import { Text } from "../../shared/text";

export const WinnerCard = ({ item }) => {
  const { name, img, earned, game } = item;
  return (
    <div
      style={{
        height: 120,
        display: "flex",
        alignItems: "center",
        padding: 10,
        backgroundColor: EColors.yellow,
        borderRadius: 10,
        marginTop: 15,
        marginRight: 20,
      }}
    >
      <img src={img} style={{ width: "40%", objectFit: "contain" }} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 15,
        }}
      >
        <Text color={EColors.black} ff={EFonts.KarlaBold} fz={18}>
          {name}
        </Text>
        <Text color={EColors.black} ff={EFonts.MontserratBI} fz={30}>
          {earned} USD
        </Text>
        <Text color={EColors.black} ff={EFonts.KarlaBold} fz={18}>
          {game}
        </Text>
      </div>
    </div>
  );
};
