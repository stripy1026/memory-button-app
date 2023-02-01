import React from "react";
import createAnswer from "util/createAnswer";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate: NavigateFunction = useNavigate();
  const moveToLoadingPage = (key: number) => {
    const answer: number[] = createAnswer(key);
    navigate(`loading`, {
      replace: true,
      state: {
        answer,
      },
    });
  };
  return (
    <div className="home">
      <header className="title">
        <h1>MEMORY BUTTON GAME</h1>
      </header>
      <div className="level-display">
        <span>EASY : ~4 level</span>
        <span>NORMAL : ~8 level</span>
        <span> HARD : ~16 level</span>
        <span>HELL : ~32 level</span>
      </div>
      <div className="container">
        {[
          { key: 1, txt: "EASY" },
          { key: 2, txt: "NORMAL" },
          { key: 3, txt: "HARD" },
          { key: 4, txt: "HELL" },
        ].map((diff) => (
          <button
            onClick={() => {
              moveToLoadingPage(diff.key * 4);
            }}
          >
            {diff.txt}
          </button>
        ))}
      </div>
    </div>
  );
};
