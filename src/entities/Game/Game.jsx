import React from "react";

export const Game = ({ item }) => {
  return (
    <div style={{ borderRadius: 10 }}>
      <img src={item.img} alt="" />
    </div>
  );
};
