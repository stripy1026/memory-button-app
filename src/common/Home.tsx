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
      <div className="title">MEMORY BUTTON GAME</div>
      <div className="level-display">
        <p>EASY : ~4 level</p>
        <p>NORMAL : ~8 level</p>
        <p> HARD : ~16 level</p>
        <p>HELL : ~32 level</p>
      </div>
      <div className="container">
        <button
          className="item"
          onClick={() => {
            moveToLoadingPage(4);
          }}
        >
          EASY
        </button>
        <button
          className="item"
          onClick={() => {
            moveToLoadingPage(8);
          }}
        >
          NORMAL
        </button>
        <button
          className="item"
          onClick={() => {
            moveToLoadingPage(16);
          }}
        >
          HARD
        </button>
        <button
          className="item"
          onClick={() => {
            moveToLoadingPage(32);
          }}
        >
          HELL
        </button>
      </div>
    </div>
  );
};
