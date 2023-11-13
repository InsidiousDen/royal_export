import "./styles.css";

import {
  gameSlide1,
  gameSlide10,
  gameSlide2,
  gameSlide3,
  gameSlide4,
  gameSlide5,
  gameSlide6,
  gameSlide7,
  gameSlide8,
  gameSlide9,
} from "../../assets";

import { EColors } from "../../shared/styles";
import { EFonts } from "../../shared/styles/fonts";
import { Icons } from "../../assets/icons/index";
import React from "react";
import Slider from "react-slick";
import { Text } from "../../shared/text/Text";
import { useRef } from "react";

export const New = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
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
      }}
    >
      <div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            margin: "5vh 1vw 1vh 1vw",
          }}
        >
          <div className="flex-r">
            <Icons.New size={30} fill={EColors.yellow} />
            <Text ff={EFonts.KarlaBold} fz={20}>
              New
            </Text>
          </div>
          <div className="flex-r">
            <Text cup fz={16} ff={EFonts.KarlaBold} color={EColors.yellow}>
              All 39
            </Text>
            <div
              className="cup"
              onClick={goPrev}
              style={{ transform: "scaleX(-1)", marginRight: 15 }}
            >
              <Icons.ChevronR size={14} />
            </div>
            <div className="cup" onClick={goNext}>
              <Icons.ChevronR size={14} />
            </div>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="cup card" src={gameSlide1} alt="" />
            <img className="cup card" src={gameSlide2} alt="" />
          </div>
          <div
            style={{
              margin: "0px 10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="cup card" src={gameSlide3} alt="" />
            <img className="cup card" src={gameSlide4} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="cup card" src={gameSlide5} alt="" />
            <img className="cup card" src={gameSlide6} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="cup  card" src={gameSlide7} alt="" />
            <img className="cup card" src={gameSlide8} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="cup card" src={gameSlide9} alt="" />
            <img className="cup card" src={gameSlide10} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="cup card" src={gameSlide1} alt="" />
            <img className="cup card" src={gameSlide2} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="cup card" src={gameSlide3} alt="" />
            <img className="cup card" src={gameSlide4} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};
