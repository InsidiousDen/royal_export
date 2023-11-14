import "./styles.css";

import {
  Icons,
  SMissions,
  SRoulette,
  SSlots,
  STour,
  SWheel,
  giftImg,
  logoImg,
} from "../../assets";

import { Button } from "../../shared/button";
import { EColors } from "../../shared/styles";
import { EFonts } from "../../shared/styles/fonts";
import { Languages } from "../Languages";
import { Text } from "../../shared/text/Text";

const subHeaderListData = [
  {
    img: SSlots,
    name: "Slots",
  },
  {
    img: SRoulette,
    name: "Live Casino",
  },
  {
    img: SWheel,
    name: "Wheel of Fortune",
  },
  {
    img: STour,
    name: "Tournament",
  },
  {
    img: SMissions,
    name: "Daily Missions",
  },
];

export const Header = ({ subheaderShown = true }) => {
  const onSearchButtonPress = () => {
    console.log("search");
  };
  const onChatButtonPress = () => {
    console.log("chat");
  };
  return (
    <div className="header-wrapper">
      <div style={{ backgroundColor: EColors.grey2 }} className="header">
        <img className="header-img" src={logoImg} alt="logo" />

        <div className="header-right">
          <Button hoverColor={EColors.black} onClick={onSearchButtonPress}>
            <Icons.Search size={22} />
          </Button>
          <div className="header-right-link">
            <Text cup fz={16} ff={EFonts.KarlaBold}>
              Promotions
            </Text>
            <img src={giftImg} alt="promotions" />
          </div>
          <div className="header-right-sign flex-r">
            <Button
              hoverColor={EColors.yellow}
              height={38}
              width={70}
              bgColor={EColors.grey}
              text="Log In"
              textHoverColor={EColors.black}
            />

            <Button
              hoverColor={EColors.grey}
              height={38}
              width={100}
              bgColor={EColors.yellow}
              text="Register"
              textColor={EColors.black}
              textHoverColor={EColors.white}
            />
          </div>
          <Languages />
          <Button hoverColor={EColors.black} onClick={onChatButtonPress}>
            <Icons.Chat size={22} />
          </Button>
        </div>
      </div>
      {subheaderShown && (
        <div className="sub-header">
          {subHeaderListData.map((item) => {
            return (
              <div className="sub-header-item cup" key={item.name}>
                <Text
                  cup
                  ff={EFonts.MontserratBI}
                  fz={19}
                  style={{ zIndex: 10, maxWidth: "60%" }}
                >
                  {item.name}
                </Text>
                <img
                  className="sub-header-item-img"
                  src={item.img}
                  alt={item.name}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
