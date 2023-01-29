export default function createAnswer(key: number): number[] {
  let answer: number[] = [];
  while (answer.length < key) {
    answer.push(Math.floor(Math.random() * 4));
  }
  return answer;
}
