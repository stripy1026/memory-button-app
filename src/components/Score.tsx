import React from "react";
import { useRecoilValue } from "recoil";
import { counting, Answer } from "../store/counting";

export const Score = () => {
  const count = useRecoilValue<number>(counting);
  const answer = useRecoilValue<number[]>(Answer);
  return (
    <div className="score">
      <p>
        score : {count}/{answer.length}/{answer}
      </p>
    </div>
  );
};
