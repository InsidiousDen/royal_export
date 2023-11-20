import React from "react";
import {
  astropayImg,
  bitcoinImg,
  ethereumImg,
  litecoinImg,
  mastercardImg,
  netellerImg,
  piastrixImg,
  scrillImg,
  visaImg,
  webmoneyImg,
} from "../../../assets/img";
import { EColors } from "../../../shared/styles/";
import "./styles.css";
export const Third = () => {
  return (
    <div className="footer-3-wrapper" style={{ backgroundColor: EColors.grey }}>
      <div className="footer-3">
        <img src={visaImg} alt="" />
        <img src={mastercardImg} alt="" />
        <img src={scrillImg} alt="" />
        <img src={netellerImg} alt="" />
        <img src={bitcoinImg} alt="" />
        <img src={ethereumImg} alt="" />
        <img src={litecoinImg} alt="" />
        <img src={webmoneyImg} alt="" />
        <img src={piastrixImg} alt="" />
        <img src={astropayImg} alt="" />
      </div>
    </div>
  );
};
