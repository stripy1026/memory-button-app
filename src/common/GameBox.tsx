import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { levelState, loadingState } from "store/level";

export const GameBox = (prop: Answer) => {
  const [level, setLevel] = useRecoilState(levelState);
  const setIsLoading = useSetRecoilState(loadingState);

  const [index, setIndex] = useState<number>(0);

  const navigate = useNavigate();

  const guessAnswer = (key: number) => {
    if (index === prop.arr.length - 1 && key === prop.arr[index]) {
      alert("Game Clear!");
      setLevel(1);
      setIsLoading(true);
      navigate("/", { replace: true });
    } else if (index === level - 1 && key === prop.arr[index]) {
      setLevel((prev) => prev + 1);
      setIsLoading(true);
    } else if (key !== prop.arr[index]) {
      setLevel(1);
      setIsLoading(true);
      navigate("/", { replace: true });
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="home">
      <div className="button-group">
        {[0, 1, 2, 3].map((key: number) => (
          <button
            key={`${key}`}
            className="game-button"
            onClick={() => {
              guessAnswer(key);
            }}
          ></button>
        ))}
      </div>
      <div>
        <span>current level:{level}</span>
      </div>
    </div>
  );
};
