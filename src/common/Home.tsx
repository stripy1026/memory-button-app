import React from "react";
import createAnswer from "util/createAnswer";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate: NavigateFunction = useNavigate();
  const handleClick = (key: number) => {
    const answer: number[] = createAnswer(key);
    navigate(`loading`, {
      replace: true,
      state: {
        answer,
      },
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          handleClick(4);
        }}
      >
        EASY
      </button>
      <button
        onClick={() => {
          handleClick(8);
        }}
      >
        NORMAL
      </button>
      <button
        onClick={() => {
          handleClick(16);
        }}
      >
        HARD
      </button>
      <button
        onClick={() => {
          handleClick(32);
        }}
      >
        HELL
      </button>
    </div>
  );
};
