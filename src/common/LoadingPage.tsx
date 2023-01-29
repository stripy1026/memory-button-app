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
  const props: number[] = location.state.answer;

  async function handleClicks(
    prop: number[],
    set: Dispatch<React.SetStateAction<Boolean[]>>
  ) {
    for (let i = 0; i < level; ++i) {
      await handleClick(prop, i, set);
    }
    navigate(`/game`, {
      state: {
        answer: props,
      },
    });
  }

  const handleClick = (
    prop: number[],
    key: number,
    set: Dispatch<React.SetStateAction<Boolean[]>>
  ) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        set([
          true && prop[key] === 0,
          true && prop[key] === 1,
          true && prop[key] === 2,
          true && prop[key] === 3,
        ]);
      }, 500);
      setTimeout(() => {
        resolve(setOnActive([false, false, false, false]));
      }, 1000);
    });
  }; // make promise function and then useNavigate
  return (
    <>
      <div className="button-group">
        <button
          className={onActive[0] ? "game-button-active" : "game-button"}
          id="one"
        >
          1
        </button>
        <button
          className={onActive[1] ? "game-button-active" : "game-button"}
          id="two"
        >
          2
        </button>
        <button
          className={onActive[2] ? "game-button-active" : "game-button"}
          id="three"
        >
          3
        </button>
        <button
          className={onActive[3] ? "game-button-active" : "game-button"}
          id="four"
        >
          4
        </button>
      </div>
      <div>
        <button
          className="start"
          onClick={() => {
            handleClicks(props, setOnActive);
          }}
        >
          start
        </button>
        <span>
          answer:{props}, current level:{level}
        </span>
      </div>
    </>
  );
};
