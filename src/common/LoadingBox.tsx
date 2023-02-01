import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { levelState, loadingState } from "store/level";

export const LoadingBox = (prop: Answer) => {
  const level: number = useRecoilValue(levelState);
  const setIsLoading = useSetRecoilState(loadingState);

  const [onActive, setOnActive] = useState<Boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  async function previewAnswer() {
    for (let i = 0; i < level; ++i) {
      await toggleButton(i);
    }
    setIsLoading(false);
  }

  const toggleButton = (key: number) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setOnActive([
          true && prop.arr[key] === 0,
          true && prop.arr[key] === 1,
          true && prop.arr[key] === 2,
          true && prop.arr[key] === 3,
        ]);
      }, 500);
      setTimeout(() => {
        resolve(setOnActive([false, false, false, false]));
      }, 1000);
    });
  return (
    <div className="home">
      <div className="button-group">
        {onActive.map((v: Boolean, index: number) => (
          <button
            key={index}
            className={`game-button${v ? "-active" : ""}`}
          ></button>
        ))}
      </div>
      <div>
        <button
          className="start"
          onClick={() => {
            previewAnswer();
          }}
        >
          start
        </button>
        <span>current level:{level}</span>
      </div>
    </div>
  );
};
