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
import { Popups } from "../widgets/popups";
import { BottomContent } from "../widgets/BottomContent";
import { Footers } from "../widgets/footers";
import { useEffect, useState } from "react";

export function App() {
  const [demoPopupShown, setDemoPopupShown] = useState(false);
  const [searchPopupShown, setSearchPopupShown] = useState(false);
  const [morePopupShown, setMorePopupShown] = useState(false);
  const [offset, setOffset] = useState(0);
  const closeDemoPopup = () => {
    setDemoPopupShown(false);
  };
  const openDemoPopup = () => {
    setDemoPopupShown(true);
  };
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setOffset(window.scrollY);
      },
      []
    );
  }, [offset]);

  return (
    <div
      style={{
        backgroundColor: EColors.black,
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
      className="App"
    >
      <Header
        setSearchPopupShown={setSearchPopupShown}
        offset={offset}
        subheaderShown={!demoPopupShown && !searchPopupShown}
      />

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
          <Footers.First setMorePopupShown={setMorePopupShown} />
          <Footers.Second />
          <Footers.Third />
          <Footers.Fourth />

          {searchPopupShown && (
            <Popups.Search setSearchPopupShown={setSearchPopupShown} />
          )}
          {morePopupShown && (
            <Popups.More setMorePopupShown={setMorePopupShown} />
          )}
        </>
      )}

      {demoPopupShown && <Popups.Demo closePopup={closeDemoPopup} />}
    </div>
  );
}
