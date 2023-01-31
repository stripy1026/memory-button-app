import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { levelState } from "store/level";

export const GamePage = () => {
  const [level, setLevel] = useRecoilState(levelState);

  const [index, setIndex] = useState<number>(0);

  const navigate = useNavigate();
  const location = useLocation();
  const answerArray: number[] = location.state.answer;

  const guessAnswer = (key: number) => {
    if (index === answerArray.length - 1 && key === answerArray[index]) {
      alert("Game Clear!");
      setLevel(1);
      navigate("/", { replace: true });
    } else if (index === level - 1 && key === answerArray[index]) {
      setLevel((prev) => prev + 1);
      navigate(`/loading`, {
        replace: true,
        state: {
          answer: answerArray,
        },
      });
    } else if (key !== answerArray[index]) {
      setLevel(1);
      navigate("/", { replace: true });
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="home">
      <div className="button-group">
        <button
          className="game-button"
          id="one"
          onClick={() => {
            guessAnswer(0);
          }}
        ></button>
        <button
          className="game-button"
          id="two"
          onClick={() => {
            guessAnswer(1);
          }}
        ></button>
        <button
          className="game-button"
          id="three"
          onClick={() => {
            guessAnswer(2);
          }}
        ></button>
        <button
          className="game-button"
          id="four"
          onClick={() => {
            guessAnswer(3);
          }}
        ></button>
      </div>
      <div>
        <span>current level:{level}</span>
      </div>
    </div>
  );
};
