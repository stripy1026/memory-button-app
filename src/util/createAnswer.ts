export default function createAnswer(): number[] {
  let answer: number[] = [];
  while (answer.length < 4) {
    answer.push(Math.floor(Math.random() * 4));
  }
  return answer;
}
