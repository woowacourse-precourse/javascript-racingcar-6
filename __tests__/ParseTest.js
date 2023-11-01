import ScoreBoard from "../src/core/scoreboard.js";
import { makeScoreboardByNames } from "../src/utils/parse.js";

describe("형 변환 테스트", () => {
  test("이름들로 빈 스코어보드 만들기 테스트", () => {
    const inputs = [[], ["a", "b"], ["a", "", "b", "c"], ["", ""], ["a", "a"]];
    const outputs = [{}, { a: 0, b: 0 }, { a: 0, b: 0, c: 0 }, {}, { a: 0 }];

    inputs.forEach((input, index) => {
      const scoreboard = new ScoreBoard(input);
      expect(scoreboard.board).toEqual(outputs[index]);
    });
  });
});
