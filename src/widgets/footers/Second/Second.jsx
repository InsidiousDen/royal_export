import React from "react";
import {
  androidImg,
  appStoreImg,
  fbButtonImg,
  instButtonImg,
  tgButtonImg,
  tiktokButtonImg,
  twitterButtonImg,
  youtubeButtonImg,
} from "../../../assets/img";
import { EColors } from "../../../shared/styles/colors";
import { EFonts } from "../../../shared/styles/fonts";
import { Text } from "../../../shared/text";
import "./styles.css";
export const Second = () => {
  return (
    <div
      style={{ backgroundColor: EColors.black }}
      className="footer-2-wrapper"
    >
      <div className="footer-2">
        <div className="footer-2-col-1">
          <div>
            <div style={{ marginBottom: 25 }}>
              <Text fz={16} ff={EFonts.KarlaBold} color={EColors.white}>
                Promotions
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Promotions
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Wheel of Fortune
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Daily Missions
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Tournaments
              </Text>
            </div>
          </div>
          <div>
            <div style={{ marginBottom: 25 }}>
              <Text fz={16} ff={EFonts.KarlaBold} color={EColors.white}>
                Games
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Popular
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Halloween
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                New Games
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                All Games
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Jackpot Play
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Wazdan Selection
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Buy Bonus
              </Text>
            </div>
          </div>
          <div>
            <div style={{ marginBottom: 25 }}>
              <Text fz={16} ff={EFonts.KarlaBold} color={EColors.white}>
                Information
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Terms and Conditions
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Responsible gaming
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Privacy Policy
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Payment Methods
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                About
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                Locations
              </Text>
            </div>
            <div style={{ marginTop: 10 }}>
              <Text
                cup
                hoverColor={EColors.yellow}
                ff={EFonts.KarlaRegular}
                color={EColors.greyText}
                fz={14}
              >
                FAQ
              </Text>
            </div>
          </div>
        </div>
        <div className="footer-2-col-2">
          <div style={{ marginBottom: 25 }}>
            <Text fz={16} ff={EFonts.KarlaBold} color={EColors.white}>
              Contacts
            </Text>
          </div>
          <div style={{ display: "flex", gap: 52 }}>
            <Text whiteSpace={"nowrap"}>
              Help:{" "}
              <span style={{ color: EColors.yellow }}>Help.RoyalBet.com</span>
            </Text>
            <div>
              <Text>
                Business:{" "}
                <span style={{ color: EColors.yellow }}>
                  Business@RoyalBet.com
                </span>
              </Text>
            </div>
          </div>
          <div style={{ marginTop: 25, display: "flex", gap: 7 }}>
            <img
              src={tgButtonImg}
              style={{ height: 35, objectFit: "contain" }}
              className="cup"
              alt=""
            />
            <img
              src={twitterButtonImg}
              style={{ height: 35, objectFit: "contain" }}
              className="cup"
              alt=""
            />
            <img
              src={youtubeButtonImg}
              style={{ height: 35, objectFit: "contain" }}
              className="cup"
              alt=""
            />
            <img
              src={instButtonImg}
              style={{ height: 35, objectFit: "contain" }}
              className="cup"
              alt=""
            />
            <img
              src={fbButtonImg}
              style={{ height: 35, objectFit: "contain" }}
              className="cup"
              alt=""
            />
            <img
              src={tiktokButtonImg}
              style={{ height: 35, objectFit: "contain" }}
              className="cup"
              alt=""
            />
          </div>
          <div style={{ marginTop: 30, display: "flex", gap: 10 }}>
            <img
              src={androidImg}
              style={{ height: 33, objectFit: "contain" }}
              className="cup"
              alt=""
            />
            <img
              src={appStoreImg}
              style={{ height: 33, objectFit: "contain" }}
              className="cup"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
