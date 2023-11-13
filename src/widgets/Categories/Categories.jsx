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
import { useRef } from "react";

export const Categories = () => {
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
        <div className="flex-r">
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
            <Button width={140}>
              <div className="flex-r">
                <Icons.Menu fill={EColors.white} size={20} />
                <Text cup ff={EFonts.KarlaBold} fz={14}>
                  Providers
                </Text>
                <Icons.ChevronDown size={20} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
