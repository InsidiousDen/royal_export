import { tournament1, tournament2, tournament3 } from "../../assets/img";

import { EColors } from "../../shared/styles";
import { EFonts } from "../../shared/styles/fonts";
import { Icons } from "../../assets/icons/index";
import React from "react";
import Slider from "react-slick";
import { Text } from "../../shared/text/Text";
import { useRef } from "react";

export const Tournament = () => {
  const tournamentData = [
    { img: tournament1 },
    { img: tournament2 },
    { img: tournament3 },
    { img: tournament1 },
    { img: tournament2 },
    { img: tournament3 },
    { img: tournament1 },
    { img: tournament2 },
    { img: tournament3 },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
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
            <Icons.Tournament size={30} fill={EColors.yellow} />
            <Text color={EColors.white} ff={EFonts.KarlaBold} fz={20}>
              Current tournaments
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
                  className="cup"
                  style={{
                    width: "25vw",
                    height: 280,
                    objectFit: "contain",
                    margin: "0px 10px ",
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
