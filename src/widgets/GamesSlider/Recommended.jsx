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
import { Game } from "../../entities/Game/Game";

export const Recommended = ({ openPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const imgRef = useRef(null);
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
        backgroundColor: EColors.grey2,
        width: "100%",
        marginTop: 30,
      }}
    >
      <div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            width: "100%",
          }}
        >
          <div className="flex-r">
            <Icons.Like size={30} fill={EColors.yellow} />
            <Text ff={EFonts.KarlaBold} fz={20}>
              Games you should try
            </Text>
          </div>
          <div className="flex-r">
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
        <div style={{ width: 1480 }}>
          <Slider ref={sliderRef} {...settings}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Game img={gameSlide1} openPopup={openPopup} />
              {/* <Game img={gameSlide2} openPopup={openPopup} /> */}
            </div>
            <div
              style={{
                margin: "0px 10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Game img={gameSlide3} openPopup={openPopup} />
              {/* <Game img={gameSlide4} openPopup={openPopup} /> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Game img={gameSlide5} openPopup={openPopup} />
              {/* <Game img={gameSlide6} openPopup={openPopup} /> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Game img={gameSlide7} openPopup={openPopup} />
              {/* <Game img={gameSlide8} openPopup={openPopup} /> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Game img={gameSlide9} openPopup={openPopup} />
              {/* <Game img={gameSlide10} openPopup={openPopup} /> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Game img={gameSlide1} openPopup={openPopup} />
              {/* <Game img={gameSlide2} openPopup={openPopup} /> */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Game img={gameSlide3} openPopup={openPopup} />
              {/* <Game img={gameSlide4} openPopup={openPopup} /> */}
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
