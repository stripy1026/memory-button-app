import { atom } from "recoil";

export const levelState = atom({
  key: "levelState",
  default: 1,
});

export const loadingState = atom({
  key: "loadingState",
  default: true,
});
