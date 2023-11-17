import "./styles.css";

import {
  Icons,
  demoBgImg,
  demoHeroImg,
  heartGreyImg,
  xImg,
} from "../../../assets";

import { Button } from "../../../shared/button/Button";
import { EColors } from "../../../shared/styles";
import { EFonts } from "../../../shared/styles/fonts";
import React from "react";
import { Text } from "../../../shared/text";

export const Demo = ({ closePopup }) => {
  const handleClosePopup = () => {
    closePopup && closePopup();
  };
  return (
    <div className="demo">
      <div
        style={{
          backgroundColor: EColors.grey,
          width: 1200,
          display: "flex",
          flexDirection: "column",
          height: "70vh",
          zIndex: 1,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: 40,
            width: "100%",
            backgroundColor: EColors.grey,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px 15px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Icons.Go />
            <Text ff={EFonts.KarlaBold} fz={14} color={EColors.greyText}>
              Play`n GO
            </Text>
          </div>
          <Text fz={14} ff={EFonts.KarlaBold}>
            Golden Tickets 2
          </Text>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Text fz={12} ff={EFonts.KarlaBold} color={EColors.greyText}>
              Real Play
            </Text>
            <div
              style={{
                width: 34,
                borderRadius: 40,
                height: 20,
                background: "#000",
                display: "flex",
                alignItems: "center",
                padding: 3,
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  borderRadius: 40,
                  height: 14,
                  width: 14,
                  backgroundColor: EColors.yellow,
                }}
              ></div>
            </div>
            <Text fz={12} ff={EFonts.KarlaBold} color={EColors.white}>
              Fun Play
            </Text>
          </div>
        </div>
        <div style={{ height: 840, width: "100%" }}>
          <iframe
            style={{ border: "none" }}
            src="https://caocw.playngonetwork.com/casino/ContainerLauncher?gid=goldenticket2&demo=2&lang=ru_RU&pid=187&practice=1&channel=desktop&origin="
            height="100%"
            width="100%"
            title="Golden Ticket 2 Casino"
          />
        </div>
      </div>
      <div
        style={{
          zIndex: 2,
          marginLeft: 10,
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <Button onClick={handleClosePopup} size={40}>
          <img src={xImg} alt="" />
        </Button>
        <Button size={40}>
          <div style={{ marginTop: 4 }}>
            <Icons.FullScreen size={18} />
          </div>
        </Button>
        <Button size={40}>
          <img src={heartGreyImg} alt="" />
        </Button>
      </div>

      <img
        onClick={closePopup}
        src={demoBgImg}
        style={{
          cursor: "pointer",
          width: "100vw",
          height: "auto",
          position: "absolute",
          top: 0,
          zIndex: 0,
        }}
        alt=""
      />
    </div>
  );
};
