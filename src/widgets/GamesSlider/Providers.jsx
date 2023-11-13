import {
  provider2,
  provider3,
  provider4,
  provider5,
  provider6,
  provider8,
} from "../../assets/img";

import { EColors } from "../../shared/styles";
import { EFonts } from "../../shared/styles/fonts";
import { Icons } from "../../assets/icons/index";
import React from "react";
import Slider from "react-slick";
import { Text } from "../../shared/text/Text";
import { useRef } from "react";

export const Providers = () => {
  const tournamentData = [
    { img: provider2 },
    { img: provider3 },
    { img: provider4 },
    { img: provider5 },
    { img: provider6 },
    { img: provider8 },
    { img: provider2 },
    { img: provider3 },
    { img: provider4 },
    { img: provider5 },
    { img: provider6 },
    { img: provider8 },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 8,
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
            margin: "5vh 2vw 1vh 1vw",
          }}
        >
          <div className="flex-r">
            <Icons.Game2 size={30} fill={EColors.yellow} />
            <Text color={EColors.white} ff={EFonts.KarlaBold} fz={20}>
              Providers
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
        <Slider ref={sliderRef} {...settings}>
          {tournamentData.map((item, index) => {
            return (
              <div key={index}>
                <img
                  src={item.img}
                  style={{
                    marginTop: 40,
                    width: "9vw",

                    objectFit: "contain",
                  }}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
