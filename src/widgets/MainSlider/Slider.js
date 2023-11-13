import "./styles.css";

import React, { useEffect, useState } from "react";

import { Button } from "../../shared/button";
import { EColors } from "../../shared/styles";
import { EFonts } from "../../shared/styles/fonts";
import { Slide1 } from "../../assets/img";
import Slider from "react-slick";
import { Text } from "../../shared/text/Text";
import { useRef } from "react";

export const MainSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [sliderHeight, setSliderHeight] = useState("auto");
  const sliderRef = useRef(null);
  const activeSlideRef = useRef(null);
  const wrapperRef = useRef(null);
  activeSlideRef.current = activeSlide;
  const sliderData = [
    {
      title: "Welcome Pack",
      description: (
        <>
          <Text ff={EFonts.KarlaRegular} fz={"2rem"}>
            150% UP TO <span className="yellow-text">1.500 USD</span> AND
            <span className="yellow-text"> 150 + 50 </span>FREE SPINS
          </Text>
        </>
      ),
      image: Slide1,
    },
    {
      title: "Welcome Pack",
      description: (
        <>
          <Text ff={EFonts.KarlaRegular} fz={"2rem"}>
            150% UP TO <span className="yellow-text">1.500 USD</span> AND
            <span className="yellow-text"> 150 + 50 </span>FREE SPINS
          </Text>
        </>
      ),
      image: Slide1,
    },
    {
      title: "Welcome Pack",
      description: (
        <>
          <Text ff={EFonts.KarlaRegular} fz={"2rem"}>
            150% UP TO <span className="yellow-text">1.500 USD</span> AND
            <span className="yellow-text"> 150 + 50 </span>FREE SPINS
          </Text>
        </>
      ),
      image: Slide1,
    },
    {
      title: "Welcome Pack",
      description: (
        <>
          <Text ff={EFonts.KarlaRegular} fz={"2rem"}>
            150% UP TO <span className="yellow-text">1.500 USD</span> AND
            <span className="yellow-text"> 150 + 50 </span>FREE SPINS
          </Text>
        </>
      ),
      image: Slide1,
    },
  ];
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setActiveSlide(next + 1);
      setSliderHeight(wrapperRef.current.clientHeight);
    },
  };

  const handleSliderNavigation = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveSlide(index);
  };
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      if (activeSlideRef.current >= sliderData.length) {
        setActiveSlide(1);
      } else {
        setActiveSlide((prev) => prev + 1);
      }
      sliderRef.current.slickGoTo(activeSlideRef.current);
    }, 5000);
    return () => clearInterval(sliderInterval);
  }, []);
  return (
    <div className="slider" ref={wrapperRef} style={{ height: sliderHeight }}>
      <Slider ref={sliderRef} {...settings}>
        {sliderData.map((item, index) => {
          return (
            <div key={index}>
              <img src={Slide1} alt="" />
              <div
                className="slider-content"
                style={{
                  left: `${100 * (index + 1)}vw`,
                }}
              >
                <Text ff={EFonts.MontserratBI} fz={"3rem"}>
                  {item.title}
                </Text>
                {item.description}
                <div style={{ marginTop: 20 }}>
                  <Button
                    textColor={EColors.black}
                    fz={18}
                    ff={EFonts.KarlaBold}
                    hoverColor={"#daac20"}
                    textHoverColor={EColors.black}
                    width={230}
                    text={"Get Bonus"}
                    height={45}
                    bgColor={EColors.yellow}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="dots">
        <ul>
          {sliderData.map((item, index) => {
            return (
              <li
                style={{
                  backgroundColor:
                    index + 1 === activeSlideRef.current
                      ? EColors.yellow
                      : EColors.grey3,
                  width: index + 1 === activeSlideRef.current ? 50 : 20,
                }}
                key={index}
                onClick={() => handleSliderNavigation(index + 1)}
                className={index === activeSlide ? "active cup" : "cup"}
              ></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
