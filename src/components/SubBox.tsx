import React from "react";
import { useRecoilValue } from "recoil";
import { Score } from "./Score";
import { Start } from "./Start";
import { isStart } from "../store/counting";

export const SubBox = () => {
  const start = useRecoilValue(isStart);
  return <div className="subbox">{start ? <Score /> : <Start />}</div>;
};
