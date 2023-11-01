import ScoreBoard from "../src/core/scoreboard";

describe("점수 로직 테스트", () => {
  test("점수 시뮬레이션 테스트", () => {
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

    const scoreBoard = new ScoreBoard(["a", "b", "c"]);

    scoringSequence.forEach((name) => {
      scoreBoard.giveScoreTo(name);
    });

    expect(scoreBoard.board).toEqual(answer);
  });
});
