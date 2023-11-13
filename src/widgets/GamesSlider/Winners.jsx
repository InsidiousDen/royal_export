import { winner1, winner2, winner3, winner4 } from "../../assets/img";

import { EColors } from "../../shared/styles";
import { EFonts } from "../../shared/styles/fonts";
import { Icons } from "../../assets/icons/index";
import React from "react";
import Slider from "react-slick";
import { Text } from "../../shared/text/Text";
import { WinnerCard } from "../../entities/Winner/WinnerCard";
import { useRef } from "react";

export const Winners = () => {
  const winnersData = [
    { name: "Valya. B", earned: "162", img: winner1, game: "Monkey King" },
    { name: "Piter. N", earned: "37", img: winner2, game: "Ronins Honor" },
    { name: "Elena. V", earned: "84", img: winner3, game: "Le Bandit" },
    { name: "George. C", earned: "115", img: winner4, game: "Rotten" },
    { name: "Valya. B", earned: "162", img: winner1, game: "Monkey King" },
    { name: "Piter. N", earned: "37", img: winner2, game: "Ronins Honor" },
    { name: "Elena. V", earned: "84", img: winner3, game: "Le Bandit" },
    { name: "George. C", earned: "115", img: winner4, game: "Rotten" },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const sliderRef = useRef(null);

  const goNext = () => {
    sliderRef.current.slickNext();
  };
  const goPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <div
      style={{
        backgroundColor: EColors.black,
        width: "100%",
        padding: "0 10vw",
        marginTop: 30,
      }}
    >
      <div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            margin: "2vh 1vw 1vh 1vw",
          }}
        >
          <div className="flex-r">
            <Icons.Circle size={30} fill={EColors.yellow} />
            <Text color={EColors.white} ff={EFonts.KarlaBold} fz={20}>
              Latest Winners
            </Text>
          </div>
          <div className="flex-r">
            <div
              className="cup"
              onClick={goPrev}
              style={{ transform: "scaleX(-1)", marginRight: 15 }}
            >
              <Icons.ChevronR fill={EColors.greyText} size={14} />
            </div>
            <div className="cup" onClick={goNext}>
              <Icons.ChevronR fill={EColors.greyText} size={14} />
            </div>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings} style={{ marginLeft: "1vw" }}>
          {winnersData.map((item, index) => {
            return <WinnerCard key={index} item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};
