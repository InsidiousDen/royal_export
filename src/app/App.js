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

export function App() {
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
      <Header />
      <MainSlider />
      <Categories />
      <GameSlider.Popular />
      <GameSlider.Winners />
      <GameSlider.New />
      <GameSlider.Tournament />
      <GameSlider.Fruits />
      <GameSlider.Providers />
    </div>
  );
}
