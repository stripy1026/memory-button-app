import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingPage } from "common/LoadingPage";
import { GamePage } from "common/GamePage";

function App() {
  let answer: number[] = [];
  while (answer.length < 6) {
    answer.push(Math.floor(Math.random() * 4));
  }
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoadingPage arr={answer} />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
