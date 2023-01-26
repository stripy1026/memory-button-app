import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { counting, isStart, Answer } from "../store/counting";

export const GameBox = () => {
  const [count, setCount] = useRecoilState<number>(counting);
  const [start, setStart] = useRecoilState<boolean>(isStart);
  const answer = useRecoilValue<number[]>(Answer);
  const handleIncrease = (
    number: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!start) return;
    if (answer[count] !== number) {
      alert("Failed!");
      setCount(0);
      setStart(false);
      return;
    }
    setCount((prev) => prev + 1);
  };
  return (
    <div className="button-group">
      <button
        className="GameButton"
        id="one"
        onClick={(e) => {
          handleIncrease(1, e);
        }}
      >
        1
      </button>
      <button
        className="GameButton"
        id="two"
        onClick={(e) => {
          handleIncrease(2, e);
        }}
      >
        2
      </button>
      <button
        className="GameButton"
        id="three"
        onClick={(e) => {
          handleIncrease(3, e);
        }}
      >
        3
      </button>
      <button
        className="GameButton"
        id="four"
        onClick={(e) => {
          handleIncrease(4, e);
        }}
      >
        4
      </button>
    </div>
  );
};
