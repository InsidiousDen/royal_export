import React from "react";
import { Text } from "../../../shared/text";
import "./styles.css";
import { EColors } from "../../../shared/styles";
import { EFonts } from "../../../shared/styles/fonts";
import { GameSlider } from "../../GamesSlider";
import { Icons } from "../../../assets";
export const More = ({ setMorePopupShown }) => {
  const handlePopupClick = () => {
    setMorePopupShown(false);
  };
  const handleClose = () => {
    setMorePopupShown(false);
  };
  return (
    <div className="popup-more-wrapper">
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
      <div className="popup-more" style={{ backgroundColor: EColors.grey2 }}>
        <div
          style={{
            backgroundColor: EColors.grey,
            width: "100%",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 18px",
          }}
        >
          <Text fz={18} color={EColors.white} ff={EFonts.KarlaExtraBold}>
            Details
          </Text>
          <div onClick={handleClose}>
            <Icons.X size={14} fill={EColors.white} />
          </div>
        </div>
        <div style={{ padding: "0px 18px" }}>
          <div style={{ marginTop: 40 }}>
            <Text fz={16} color={EColors.white} ff={EFonts.KarlaBold}>
              Welcome to RoyalBet casino 2023!
            </Text>
          </div>
          <div style={{ marginTop: 24 }}>
            <Text fz={16} color={EColors.greyText} ff={EFonts.KarlaRegular}>
              The RoyalBet Casino is explicitly made for Romanian players, with
              their needs and tastes in mind. We provide casino and live games
              and slots collection on PCs and mobiles. We design unique
              promotions to improve the gaming experience daily. You can use
              fast payment methods working in Romania.
            </Text>
          </div>
          <div style={{ marginTop: 23 }}>
            <Text fz={16} color={EColors.white} ff={EFonts.KarlaBold}>
              Security
            </Text>
          </div>

          <div style={{ marginTop: 23 }}>
            <Text fz={16} color={EColors.greyText} ff={EFonts.KarlaRegular}>
              We work under the Romanian license number L1223945W001377 issued
              by Comitetul de Supraveghere din cadrul O.N.J.N. Romania. The
              permit has been active from 01.03.2022 till 29.02.2032. The
              operator is Boss Online SRL, and the address is Bucharest, sector
              1, Str. Boteanu, no. 6, Romania.
            </Text>
          </div>
          <div style={{ marginTop: 23 }}>
            <Text fz={16} color={EColors.greyText} ff={EFonts.KarlaRegular}>
              We also have contacts with such regulators as EGBA (European
              Gaming and Betting Association) and IBIA (International Betting
              Integrity Association). The first is based in Brussels and works
              together with regulators in the EU to develop higher consumer
              protection. The second is the organization working with integrity
              and honesty in the casino and betting business. You can see their
              logos at the bottom of this site.
            </Text>
          </div>
          <div style={{ marginTop: 23 }}>
            <Text fz={16} color={EColors.greyText} ff={EFonts.KarlaRegular}>
              All our providers have licenses and certifications to ensure all
              games’ integrity. So you can be sure our site is safe for Romanian
              players.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
