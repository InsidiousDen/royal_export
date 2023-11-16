import React from "react";
import {
  footer1Img,
  footer2Img,
  footer3Img,
  footer4Img,
  footer5Img,
  footer6Img,
} from "../../../assets/img";
import { Text } from "../../../shared/text";
import { EFonts } from "../../../shared/styles/fonts";
import "./styles.css";
import { EColors } from "../../../shared/styles";
export const Fourth = () => {
  return (
    <div className="footer-4-wrapper">
      <div className="footer-4">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={footer1Img} style={{ objectFit: "contain" }} alt="" />
          <img src={footer2Img} style={{ objectFit: "contain" }} alt="" />
          <img src={footer3Img} style={{ objectFit: "contain" }} alt="" />
          <img src={footer4Img} style={{ objectFit: "contain" }} alt="" />
          <img src={footer5Img} style={{ objectFit: "contain" }} alt="" />
          <img src={footer6Img} style={{ objectFit: "contain" }} alt="" />
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Text
            lh={18}
            fz={12}
            ff={EFonts.KarlaRegular}
            color={EColors.greyText}
          >
            RoyalBet Online SRL detine Licenta nr. L1223945W001377 emisa de
            Comitetul de Supraveghere din cadrul O.N.J.N. Romania, valabila din
            data de 01.03.2022 <br /> pana la data de 29.02.2032. <br />{" "}
            Jucatorii trebuie sa aiba peste 18 ani. Jocurile de noroc pot cauza
            dependenta. Va rugam sa jucati responsabil!
          </Text>
          <div style={{ marginTop: 20 }}>
            <Text
              lh={18}
              fz={12}
              ff={EFonts.KarlaRegular}
              color={EColors.greyText}
            >
              Any person under 18 years old or under the legal age for gambling
              in a particular jurisdiction (“Eligible Age“) may not use the
              services of this Website under any circumstances.
            </Text>
          </div>
          <div style={{ marginTop: 20 }}>
            <Text
              lh={18}
              fz={12}
              ff={EFonts.KarlaRegular}
              color={EColors.greyText}
            >
              Copyright © 2020-2023 RoyalBet. All rights reserved.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
