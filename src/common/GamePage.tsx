import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { levelState } from "store/level";

export const GamePage = () => {
  const [level, setLevel] = useRecoilState(levelState);

  const [index, setIndex] = useState<number>(0);

  const navigate = useNavigate();
  const location = useLocation();
  const props: number[] = location.state.answer;

  const handleClick = (key: number) => {
    if (index === props.length - 1 && key === props[index]) {
      alert("Game Clear!");
      setLevel(1);
      navigate("/", { replace: true });
    } else if (index === level - 1 && key === props[index]) {
      alert("Successed!");
      setLevel((prev) => prev + 1);
      navigate(`/loading`, {
        replace: true,
        state: {
          answer: props,
        },
      });
    } else if (key !== props[index]) {
      alert("Failed!");
      setLevel(1);
      navigate("/", { replace: true });
    } else {
      setIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="button-group">
        <button
          className="game-button"
          id="one"
          onClick={() => {
            handleClick(0);
          }}
        >
          1
        </button>
        <button
          className="game-button"
          id="two"
          onClick={() => {
            handleClick(1);
          }}
        >
          2
        </button>
        <button
          className="game-button"
          id="three"
          onClick={() => {
            handleClick(2);
          }}
        >
          3
        </button>
        <button
          className="game-button"
          id="four"
          onClick={() => {
            handleClick(3);
          }}
        >
          4
        </button>
      </div>
      <div>
        <span>
          answer:{props}, current level:{level}
        </span>
      </div>
    </>
  );
};
