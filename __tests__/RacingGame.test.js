import { mockQuestions, mockRandoms, getLogSpy } from "./mocks.js";
import RacingGame from "../src/RacingGame.js";

// ismoving, printcurrentposition, findwinner, printwinner

describe("기능: 결과 및 우승자 출력", () => {
  test("실행 결과 출력", async () => {
    // given
    const outputs = [
      "실행 결과",
      "bana :",
      "rana : -",
      "bana : -",
      "rana : -",
      "bana : -",
      "rana : --",
    ];
    const logSpy = getLogSpy();
    mockQuestions(["bana, rana", 3]);
    mockRandoms([3, 7, 8, 2, 1, 6]);

    // when
    const game = new RacingGame();
    await game.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
  test.each([
    [
      "단독 우승자 출력",
      ["bana, rana", "3"],
      [3, 7, 8, 2, 1, 6],
      "최종 우승자 : rana",
    ],
    [
      "공동 우승자 출력",
      ["aran, nara, varu", 3],
      [0, 1, 2, 3, 4, 5, 6, 7, 8],
      "최종 우승자 : nara, varu",
    ],
  ])("%s", async (testName, inputs, randoms, output) => {
    // given
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const game = new RacingGame();
    await game.play();

    // then
    expect(logSpy).toHaveBeenLastCalledWith(output);
  });
});
