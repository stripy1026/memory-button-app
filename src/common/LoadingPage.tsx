import { useState } from "react";

type Props = {
  arr: number[];
};

export const LoadingPage = (props: Props) => {
  const [onActive, setOnActive] = useState<Boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const handleClick = (prop: number[]) => {
    new Promise((resolve) => {
      setOnActive([
        true && prop[0] === 0,
        true && prop[0] === 1,
        true && prop[0] === 2,
        true && prop[0] === 3,
      ]);
      setTimeout(() => {
        resolve(setOnActive([false, false, false, false]));
      }, 500);
    });
  };
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
          onClick={(e) => {
            handleClick(props.arr);
          }}
        >
          start
        </button>
        <span>answer:{props.arr}</span>
      </div>
    </>
  );
};
