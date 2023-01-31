import { useState, Dispatch } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { levelState } from "store/level";

export const LoadingPage = () => {
  const level: number = useRecoilValue(levelState);

  const [onActive, setOnActive] = useState<Boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const navigate = useNavigate();
  const location = useLocation();
  const answerArray: number[] = location.state.answer;

  async function previewAnswer(
    answerArray: number[],
    setToggle: Dispatch<React.SetStateAction<Boolean[]>>
  ) {
    for (let i = 0; i < level; ++i) {
      await toggleButton(answerArray, i, setToggle);
    }
    navigate(`/game`, {
      replace: true,
      state: {
        answer: answerArray,
      },
    });
  }

  const toggleButton = (
    answerArray: number[],
    key: number,
    setToggle: Dispatch<React.SetStateAction<Boolean[]>>
  ) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setToggle([
          true && answerArray[key] === 0,
          true && answerArray[key] === 1,
          true && answerArray[key] === 2,
          true && answerArray[key] === 3,
        ]);
      }, 500);
      setTimeout(() => {
        resolve(setOnActive([false, false, false, false]));
      }, 1000);
    });
  };
  return (
    <div className="home">
      <div className="button-group">
        <button
          className={onActive[0] ? "game-button-active" : "game-button"}
          id="one"
        ></button>
        <button
          className={onActive[1] ? "game-button-active" : "game-button"}
          id="two"
        ></button>
        <button
          className={onActive[2] ? "game-button-active" : "game-button"}
          id="three"
        ></button>
        <button
          className={onActive[3] ? "game-button-active" : "game-button"}
          id="four"
        ></button>
      </div>
      <div>
        <button
          className="start"
          onClick={() => {
            previewAnswer(answerArray, setOnActive);
          }}
        >
          start
        </button>
        <span>current level:{level}</span>
      </div>
    </div>
  );
};
