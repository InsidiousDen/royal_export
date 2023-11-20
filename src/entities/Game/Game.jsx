import React, { useRef, useState, useEffect } from "react";
import { heartImg, infoImg, playImg } from "../../assets";
import { EColors } from "../../shared/styles";
import { EFonts } from "../../shared/styles/fonts";
import { Text } from "../../shared/text/Text";
import "./styles.css";

export const Game = ({ img, title, openPopup }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="card-wrapper"
    >
      <img className="cup card" src={img} alt="" />
      <div>
        <div
          style={{ opacity: hover ? 1 : 0, height: "100%" }}
          className="card-hover cup"
        >
          <div style={{ position: "absolute", left: 10, top: 10 }}>
            <Text fz={14} ff={EFonts.KarlaBold} color={EColors.black}>
              96.00% RTP
            </Text>
          </div>
          <div style={{ position: "absolute", top: 10, right: 10 }}>
            <img src={infoImg} style={{ height: 22 }} alt="" />
          </div>
          <div style={{ position: "absolute", bottom: 10, right: 10 }}>
            <img src={heartImg} style={{ height: 22 }} alt="" />
          </div>
          <div style={{ position: "absolute", bottom: 10, left: 10 }}>
            <Text color={EColors.black} fz={16} ff={EFonts.KarlaBold}>
              Wanted
            </Text>
            <Text color={EColors.black} fz={14} ff={EFonts.KarlaRegular}>
              NetEnt
            </Text>
          </div>
          <img
            onClick={openPopup}
            src={playImg}
            style={{ height: 50, marginBottom: 3 }}
          />
          <Text
            onClick={openPopup}
            color={EColors.black}
            fz={16}
            ff={EFonts.KarlaExtraBold}
            underline
          >
            Demo Play
          </Text>
        </div>
      </div>
    </div>
  );
};
