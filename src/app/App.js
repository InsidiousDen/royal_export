import "./App.css";
import "../shared/styles/main.css";
import "../shared/styles/hover.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Categories } from "../widgets/Categories/Categories";
import { EColors } from "../shared/styles";
import { GameSlider } from "../widgets/GamesSlider/";
import { Header } from "../widgets/Header/Header";
import { MainSlider } from "../widgets/MainSlider/Slider";
import { useState } from "react";
import { Popups } from "../widgets/popups";
import { BottomContent } from "../widgets/BottomContent";
import { Footers } from "../widgets/footers";

export function App() {
  const [demoPopupShown, setDemoPopupShown] = useState(false);
  const closeDemoPopup = () => {
    setDemoPopupShown(false);
  };
  const openDemoPopup = () => {
    setDemoPopupShown(true);
  };
  return (
    <div
      style={{
        backgroundColor: EColors.black,
        height: "100%",
        width: "100%",
        overflowX: "hidden",
      }}
      className="App"
    >
      <Header subheaderShown={!demoPopupShown} />

      {!demoPopupShown && (
        <>
          <MainSlider />
          <Categories />
          <GameSlider.Popular openPopup={openDemoPopup} />
          <GameSlider.Winners />
          <GameSlider.New openPopup={openDemoPopup} />
          <GameSlider.Tournament />
          <GameSlider.Fruits openPopup={openDemoPopup} />
          <BottomContent />
          <GameSlider.Providers />
          <Footers.First />
          <Footers.Second />
          <Footers.Third />
          <Footers.Fourth />
        </>
      )}

      {demoPopupShown && <Popups.Demo closePopup={closeDemoPopup} />}
    </div>
  );
}
