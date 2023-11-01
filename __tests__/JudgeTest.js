import { judgeWinner } from "../src/core/judge";

describe("결과 판단 로직 테스트", () => {
  test("스코어보드로 우승자 결과를 잘 출력하는가?", () => {
    const inputs = [
      { a: 3, b: 2, c: 1, d: 0 },
      { a: 3, b: 3, c: 1, d: 2 },
      { a: 3, b: 3, c: 3, d: 3 },
      { a: 0, b: 0, c: 0 },
    ];
    const answer = [["a"], ["a", "b"], ["a", "b", "c", "d"], ["a", "b", "c"]];

    inputs.forEach((input, index) => {
      const winners = judgeWinner(input);
      expect(winners).toEqual(answer[index]);
    });
  });
});
