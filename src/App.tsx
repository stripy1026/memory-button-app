import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { GamePage } from "common/GamePage";
import { Home } from "common/Home";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
