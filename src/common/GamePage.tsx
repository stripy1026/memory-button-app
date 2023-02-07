import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loadingState } from "store/level";
import { GameBox } from "./GameBox";
import { LoadingBox } from "./LoadingBox";

export const GamePage = () => {
  const isLoading = useRecoilValue(loadingState);

  const location = useLocation();
  if (location.state === null) {
    return <header>PAGE ERROR !!</header>;
  }

  const answerArray: number[] = location.state.answer;
  return (
    <div>
      {isLoading ? (
        <LoadingBox arr={answerArray} />
      ) : (
        <GameBox arr={answerArray} />
      )}
    </div>
  );
};
