import React from "react";
import "./styles.css";
import { EColors } from "../../../shared/styles/colors";
import { Text } from "../../../shared/text";
import { Button } from "../../../shared/button";
import { Icons } from "../../../assets/icons";
import { EFonts } from "../../../shared/styles/fonts";
export const First = ({ setMorePopupShown }) => {
  const onShowMorePress = () => {
    setMorePopupShown(true);
  };
  return (
    <div
      style={{ backgroundColor: EColors.grey2 }}
      className="footer-1-wrapper"
    >
      <div className="footer-1">
        <div className="footer-1-col-1">
          <Text ff={EFonts.KarlaExtraBold} color={EColors.white} fz={18}>
            Welcome to DonCash casino 2023!
          </Text>
          <div style={{ marginTop: 26 }}>
            <Text
              lh={22}
              ff={EFonts.KarlaRegular}
              fz={16}
              color={EColors.greyText}
            >
              The company was founded in 2023, and during this time it has
              managed to attract the attention of millions of players <br />{" "}
              around the world. Thousands of popular games await you here,
              including slots, poker, roulette, lotteries and much more. <br />{" "}
              In addition, each user participates in a generous bonus program,
              and receives the first prize immediately after <br />{" "}
              registration. Immerse yourself in the world of excitement and
              great offers from the DonCash casino!
            </Text>
          </div>
          <div style={{ marginTop: 20 }}>
            <Text
              lh={22}
              ff={EFonts.KarlaRegular}
              fz={16}
              color={EColors.greyText}
            >
              Casino RoyaLbet: main
            </Text>
          </div>
          <div style={{ marginTop: 20 }}>
            <Text
              lh={22}
              ff={EFonts.KarlaRegular}
              fz={16}
              color={EColors.greyText}
            >
              Check out the basic information about the RoyaLbet online casino
              using the <br /> table below.
            </Text>
          </div>
          <div style={{ marginTop: 20 }}>
            <Button
              onClick={onShowMorePress}
              bgColor={EColors.grey}
              height={34}
              width={133}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Text fz={16} ff={EFonts.KarlaBold} color={EColors.white}>
                  Show More
                </Text>
                <Icons.ChevronDown fill={EColors.greyText} />
              </div>
            </Button>
          </div>
        </div>
        <div className="footer-1-col-2">
          <Text ff={EFonts.KarlaExtraBold} color={EColors.white} fz={18}>
            Let’s improve your gaming experience
          </Text>
          <div style={{ marginTop: 26 }}>
            <Text
              lh={22}
              ff={EFonts.KarlaRegular}
              fz={16}
              color={EColors.greyText}
            >
              Have you found a bug or have an idea for the <br /> platform
              improvement? Please, leave your message here!
            </Text>
          </div>
          <div style={{ marginTop: 20 }}>
            <textarea
              placeholder="Your feedback"
              style={{
                caretColor: EColors.white,
                color: EColors.white,
                width: 483,
                height: 137,
                border: "none",
                padding: 10,
                borderWidth: 1,
                borderColor: EColors.grey2,
                borderRadius: 10,
                backgroundColor: EColors.black,
              }}
            />
          </div>
          <div
            className="flex-r"
            style={{
              marginTop: 10,
            }}
          >
            <Button
              text="Sign up or Login"
              fz={14}
              ff={EFonts.KarlaBold}
              textColor={EColors.black}
              textHoverColor={EColors.white}
              hoverColor={EColors.grey}
              bgColor={EColors.yellow}
              width={148}
              height={34}
            />
            <Text ff={EFonts.KarlaBold} fz={14} color={EColors.white}>
              Or Email us:{" "}
              <span className="cup" style={{ color: EColors.yellow }}>
                feedback@royalbet24.com
              </span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
