import { atom } from "recoil";

export const Answer = atom<number[]>({
  key: "answer",
  default: [],
});

export const memoryQueue = atom<number[]>({
  key: "queue",
  default: [],
});

export const counting = atom<number>({
  key: "counting",
  default: 0,
});

export const isStart = atom<boolean>({
  key: "start",
  default: false,
});
