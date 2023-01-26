import React from "react";
import { useSetRecoilState } from "recoil";
import { isStart, Answer } from "../store/counting";

export const Start = () => {
  const setStart = useSetRecoilState<boolean>(isStart);
  const setAnswer = useSetRecoilState<number[]>(Answer);
  const handleStart = () => {
    setAnswer(() => {
      const prev: number[] = [];
      while (prev.length < 24) {
        prev.push(1 + Math.floor(Math.random() * 4));
      }
      return prev;
    });
    setStart(true);
  };
  return (
    <div>
      <button className="start" onClick={handleStart}>
        Game Start
      </button>
    </div>
  );
};
