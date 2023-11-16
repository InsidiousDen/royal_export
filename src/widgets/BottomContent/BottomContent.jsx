import React from "react";
import {
  bottomBg,
  grandImg,
  majorImg,
  megaImg,
  minorImg,
} from "../../assets/img";
import { Button } from "../../shared/button";
import { EColors } from "../../shared/styles";
import { EFonts } from "../../shared/styles/fonts";
import { Text } from "../../shared/text";
import "./styles.css";
export const BottomContent = () => {
  return (
    <div className="bottom-content-wrapper">
      <img src={bottomBg} />
      <div className="bottom-content">
        <div>
          <Text fz={62} ff={EFonts.MontserratBI} color={EColors.white}>
            Jackpot
          </Text>
          <Text fz={62} ff={EFonts.MontserratBI} color={EColors.yellow}>
            Play
          </Text>
          <div style={{ marginTop: 60 }}>
            <Button
              text="Play now"
              fz={24}
              ff={EFonts.KarlaExtraBold}
              textColor={EColors.black}
              textHoverColor={EColors.white}
              hoverColor={EColors.grey}
              bgColor={EColors.yellow}
              width={230}
              height={60}
            />
          </div>
        </div>
        <div className="bottom-content-col-2">
          <ul>
            <li>
              <div>
                <img
                  src={minorImg}
                  alt=""
                  style={{
                    width: 17,
                    objectFit: "contain",
                    position: "static",
                  }}
                />
                <Text
                  fz={24}
                  ff={EFonts.KarlaExtraBold}
                  color={EColors.greyText}
                >
                  Major
                </Text>
              </div>
              <div>
                <Text fz={24} ff={EFonts.MontserratBI} color={EColors.white}>
                  73,76
                </Text>
              </div>
            </li>
            <li>
              <div>
                <img
                  src={majorImg}
                  alt=""
                  style={{
                    width: 17,
                    objectFit: "contain",
                    position: "static",
                  }}
                />
                <Text
                  fz={24}
                  ff={EFonts.KarlaExtraBold}
                  color={EColors.greyText}
                >
                  Major
                </Text>
              </div>
              <div>
                <Text fz={24} ff={EFonts.MontserratBI} color={EColors.white}>
                  73,76
                </Text>
              </div>
            </li>
            <li>
              <div>
                <img
                  src={megaImg}
                  alt=""
                  style={{
                    width: 17,
                    objectFit: "contain",
                    position: "static",
                  }}
                />
                <Text
                  fz={24}
                  ff={EFonts.KarlaExtraBold}
                  color={EColors.greyText}
                >
                  Major
                </Text>
              </div>
              <div>
                <Text fz={24} ff={EFonts.MontserratBI} color={EColors.white}>
                  73,76
                </Text>
              </div>
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 80,
            }}
          >
            <div style={{ display: "flex", gap: 10 }}>
              <img
                src={grandImg}
                style={{ objectFit: "contain", width: 25, position: "static" }}
                alt=""
              />
              <Text color={EColors.greyText} fz={28} ff={EFonts.KarlaExtraBold}>
                Grand Jackpot
              </Text>
            </div>
            <Text ff={EFonts.MontserratBI} fz={70} color={EColors.yellow}>
              67,042.63
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
