import "./styles.css";

import { Button } from "../../shared/button/Button";
import { Category } from "../../entities/Category";
import { Dropwins } from "../../assets/icons/Dropwins";
import { EColors } from "../../shared/styles";
import { EFonts } from "../../shared/styles/fonts";
import { Fire } from "../../assets/icons/FIre";
import { Fruits } from "../../assets/icons/Fruits";
import { Gift } from "../../assets/icons/Gift";
import { Icons } from "../../assets/icons";
import { Jackpot } from "../../assets/icons/Jackpot";
import { M } from "../../assets/icons/M";
import { New } from "../../assets/icons/New";
import { Play } from "../../assets/icons/Play";
import Slider from "react-slick";
import { Tables } from "../../assets/icons/Tables";
import { Text } from "../../shared/text";
import { useRef, useState } from "react";
import { Go } from "../../assets/icons/Go";
import { Bomb } from "../../assets/icons/Bomb";
import { Evolving } from "../../assets/icons/Evolving";
import { Microgaming } from "../../assets/icons/Microgaming";
import { DropdownItem } from "./DropdownItem";

export const Categories = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };
  const sliderRef = useRef(null);
  const categoriesData = [
    { icon: Play, name: "Lobby" },
    { icon: New, name: "New" },
    { icon: Fire, name: "Popular" },
    { icon: Gift, name: "Bonus buy" },
    { icon: Fruits, name: "Fruits" },
    { icon: Tables, name: "Tables" },
    { icon: Jackpot, name: "Jackpot" },
    { icon: Dropwins, name: "Drop & Wins" },
    { icon: Dropwins, name: "Pragmatic" },
    { icon: M, name: "Megaways" },
  ];

  const dropdownData = [
    { icon: Go, title: "Play`n Go", count: 321 },
    { icon: Bomb, title: "Pragmatic Play", count: 356 },
    { icon: Microgaming, title: "Microgaming", count: 289 },
    { icon: Evolving, title: "Evolution Gaming", count: 12 },
    { icon: Go, title: "Play`n Go", count: 321 },
    { icon: Bomb, title: "Pragmatic Play", count: 356 },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
  };
  const goRight = () => {
    sliderRef.current.slickNext();
  };
  const goLeft = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div className="categories-wrapper">
      <div className="categories">
        <Slider ref={sliderRef} {...settings}>
          {categoriesData.map((item, index) => {
            return <Category key={index} item={item} />;
          })}
        </Slider>
      </div>
      <div className="flex-r">
        <div className="flex-r" style={{ marginRight: 20 }}>
          <div
            onClick={goLeft}
            className="cup"
            style={{ transform: "scaleX(-1)", marginRight: 10 }}
          >
            <Icons.ChevronR size={14} />
          </div>
          <div className="cup" onClick={goRight}>
            <Icons.ChevronR size={14} />
          </div>
        </div>
        <div className="flex-r">
          <Button width={140}>
            <div className="flex-r">
              <Icons.Search fill={EColors.white} size={24} />
              <input
                style={{
                  backgroundColor: EColors.grey,
                  width: 50,
                  fontFamily: EFonts.KarlaBold,
                  margin: "0 15px",
                }}
                placeholder="Search"
              />
            </div>
          </Button>
          <div>
            <div style={{ position: "relative" }}>
              <Button onClick={toggleDropdown} width={140}>
                <div className="flex-r">
                  <Icons.Menu fill={EColors.white} size={20} />
                  <Text cup ff={EFonts.KarlaBold} fz={14}>
                    Providers
                  </Text>
                  <Icons.ChevronDown size={20} />
                </div>
              </Button>
              {openDropdown && (
                <div
                  style={{
                    height: 240,
                    width: 240,
                    position: "absolute",
                    backgroundColor: EColors.grey,
                    borderRadius: 10,
                    top: 50,
                    overflow: "hidden",
                    zIndex: 100,
                    padding: "16px 0px 0px 0px",
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      padding: "0px 10px",
                    }}
                  >
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        borderRadius: 10,
                        backgroundColor: EColors.transparent,
                        padding: "6px 0px 6px 25px",
                        border: `1px solid ${EColors.greyText}`,
                        fontSize: 12,
                        fontFamily: EFonts.KarlaRegular,
                        caretColor: EColors.greyText,
                        color: EColors.white,
                      }}
                    />
                    <div style={{ position: "absolute", top: 6, left: 18 }}>
                      <Icons.Search size={16} />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "calc(100% - 16px)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginTop: 22,
                        marginBottom: 20,
                        marginLeft: 10,
                      }}
                    >
                      <div className="flex-c" style={{ width: 20 }}>
                        <Icons.Menu size={16} />
                      </div>
                      <Text
                        ff={EFonts.KarlaRegular}
                        color={EColors.white}
                        fz={14}
                      >
                        All Providers
                      </Text>
                    </div>
                    <div
                      style={{
                        overflow: "scroll",
                        width: "100%",
                        maxHeight: 120,
                      }}
                    >
                      {dropdownData.map((item) => {
                        return <DropdownItem item={item} />;
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
