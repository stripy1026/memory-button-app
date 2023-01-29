import { useState, Dispatch } from "react";

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

  async function handleClicks(
    prop: number[],
    set: Dispatch<React.SetStateAction<Boolean[]>>
  ) {
    for (let i = 0; i < prop.length; ++i) {
      console.log(`loop : ${i}, ${prop}`);
      await handleClick(prop, i, set);
    }
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
          onClick={(e) => {
            handleClicks(props.arr, setOnActive);
          }}
        >
          start
        </button>
        <span>answer:{props.arr}</span>
      </div>
    </>
  );
};
