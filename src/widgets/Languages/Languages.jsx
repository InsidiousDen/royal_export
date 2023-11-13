import "./styles.css";

import { flagEngImg } from "../../assets";
import { langData } from "./config";
import { useState } from "react";

export const Languages = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleOpen = () => {
    if (open) {
      setVisible(false);
      setTimeout(() => {
        setOpen(false);
      }, 400);
    } else {
      setOpen((prev) => !prev);
      setTimeout(() => {
        setVisible((prev) => !prev);
      }, 50);
    }
  };

  return (
    <div style={{ height: 30 }} className="flex-c  lang">
      <img onClick={handleOpen} className="cup" src={flagEngImg} alt="" />

      <div
        style={{ display: open ? "flex" : "none", opacity: visible ? 1 : 0 }}
        className="lang-dropdown flex-c"
      >
        {langData.map((item, index) => {
          return (
            <img className="cup" key={index} src={item.icon} alt={item.name} />
          );
        })}
      </div>
    </div>
  );
};
