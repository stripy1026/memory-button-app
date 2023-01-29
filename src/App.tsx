import "./App.css";
import { RecoilRoot } from "recoil";
import { LoadingPage } from "common/LoadingPage";

function App() {
  let answer: number[] = [];
  while (answer.length < 6) {
    answer.push(Math.floor(Math.random() * 4));
  }
  return (
    <RecoilRoot>
      <LoadingPage arr={answer} />
    </RecoilRoot>
  );
}

export default App;
