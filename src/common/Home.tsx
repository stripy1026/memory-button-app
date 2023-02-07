/** @jsxImportSource @emotion/react */

import createAnswer from "util/createAnswer";
import { NavigateFunction, useNavigate } from "react-router-dom";
import * as style from "style/HomeStyle";

export const Home = () => {
  const navigate: NavigateFunction = useNavigate();
  const moveToGamePage = (key: number) => {
    const answer: number[] = createAnswer(key);
    navigate(`game`, {
      replace: true,
      state: {
        answer,
      },
    });
  };
  return (
    <div css={style.homeStyle}>
      <header css={style.homeTitleStyle}>
        <h1>MEMORY BUTTON GAME</h1>
      </header>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <p>tmp</p>
      <div css={style.homeTextStyle}>
        <span>EASY : ~4 level</span>
        <span>NORMAL : ~8 level</span>
        <span> HARD : ~16 level</span>
        <span>HELL : ~32 level</span>
      </div>
      <div className="container">
        {[
          { key: 1, txt: "EASY" },
          { key: 2, txt: "NORMAL" },
          { key: 3, txt: "HARD" },
          { key: 4, txt: "HELL" },
        ].map((diff) => (
          <button
            css={style.diffButtonStyle}
            key={`${diff.key}`}
            onClick={() => {
              moveToGamePage(diff.key * 4);
            }}
          >
            {diff.txt}
          </button>
        ))}
      </div>
    </div>
  );
};
