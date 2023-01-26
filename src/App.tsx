import "./App.css";
import { GameBox } from "./components/GameBox";
import { SubBox } from "./components/SubBox";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <GameBox />
      <SubBox />
    </RecoilRoot>
  );
}

export default App;
