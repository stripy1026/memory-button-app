import React from "react";
import createAnswer from "util/createAnswer";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const Home = () => {
  const answer: number[] = createAnswer();
  const navigate: NavigateFunction = useNavigate();
  const handleClick = () =>
    navigate(`loading`, {
      state: {
        answer,
      },
    });
  return (
    <div>
      <button onClick={handleClick}>Game Start</button>
    </div>
  );
};
