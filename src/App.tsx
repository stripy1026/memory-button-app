import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { GamePage } from "common/GamePage";
import { Home } from "common/Home";
import { Layout } from "common/Layout";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<GamePage />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
