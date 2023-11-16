import React from "react";
import { Text } from "../../../shared/text";
import "./styles.css";
import { EColors } from "../../../shared/styles";
import { EFonts } from "../../../shared/styles/fonts";
import { GameSlider } from "../../GamesSlider";
import { Icons } from "../../../assets";
export const Search = ({ setSearchPopupShown }) => {
  const handlePopupClick = () => {
    setSearchPopupShown(false);
  };

  return (
    <div className="popup-search-wrapper">
      <div
        onClick={handlePopupClick}
        style={{
          position: "fixed",
          top: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
          backgroundColor: EColors.transparent,
        }}
      ></div>
      <div className="popup-search" style={{ backgroundColor: EColors.grey2 }}>
        <div style={{ width: "100%", position: "relative" }}>
          <div
            style={{
              zIndex: 20,
              position: "absolute",
              left: 14,
              top: 11,
              height: "fit-content",
              width: "auto",
            }}
          >
            <Icons.Search size={20} fill={EColors.greyText} />
          </div>
          <input
            style={{
              width: "100%",
              backgroundColor: EColors.black,
              placeholderColor: EColors.greyText,
              fontFamily: EFonts.KarlaRegular,
              color: EColors.white,
              caretColor: "white",
              borderRadius: 10,
              borderWidth: 1,
              borderColor: EColors.grey,
              padding: "14px 47px",
            }}
            placeholder="Start entering the game’s name or theme"
            type="text"
          />
          <div style={{ position: "absolute", top: 11, right: 14 }}>
            <Text cup ff={EFonts.KarlaRegular} fz={16} color={EColors.white}>
              Cancel
            </Text>
          </div>
        </div>
        <div style={{ marginTop: 30, marginBottom: 10 }}>
          <Text ff={EFonts.KarlaRegular} fz={16} color={EColors.greyText}>
            Enter at least 3 symbols to start searching
          </Text>
        </div>
        <GameSlider.Recommended />
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 80,
            height: 230,
            background:
              " linear-gradient(270deg, rgba(26,30,36,1) 50%, rgba(26,30,36,0) 100%)",
          }}
        ></div>
      </div>
    </div>
  );
};
