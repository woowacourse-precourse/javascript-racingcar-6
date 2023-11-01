import App from "../src/App.js";
import ScoreBoard from "../src/core/scoreboard.js";
import { makeScoreboardByNames } from "../src/utils/parse.js";
import { getLogSpy, mockQuestions, mockRandoms } from "./utils.js";

describe("자동차 경주 게임", () => {
  test("점수 테스트", () => {
    const scoringSequence = [
      "a",
      "b",
      "a",
      "a",
      "a",
      "c",
      "b",
      "a",
      "d",
      "d",
      "d",
      "d",
      "D",
    ];
    const answer = { a: 5, b: 2, c: 1 };

    const app = new App();
    app.scoreBoard = new ScoreBoard(["a", "b", "c"]);

    scoringSequence.forEach((name) => {
      app.scoreBoard.giveScoreTo(name);
    });

    expect(app.scoreBoard.board).toEqual(answer);
  });

  test("우승자 결과 테스트", () => {
    const inputs = [
      { a: 3, b: 2, c: 1, d: 0 },
      { a: 3, b: 3, c: 1, d: 2 },
      { a: 3, b: 3, c: 3, d: 3 },
      { a: 0, b: 0, c: 0 },
    ];
    const answer = [["a"], ["a", "b"], ["a", "b", "c", "d"], ["a", "b", "c"]];

    const app = new App();
    app.scoreBoard = new ScoreBoard([]);

    inputs.forEach((input, index) => {
      app.scoreBoard.board = input;

      const winners = app.judgeWinner();
      expect(winners).toEqual(answer[index]);
    });
  });

  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]]])(
    "이름에 대한 예외 처리",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );
});
