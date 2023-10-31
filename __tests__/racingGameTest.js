// RacingGame.test.js
const RacingGame = require("../src/RacingGame");

describe("RacingGame 클래스 테스트", () => {
  test("라운드 설정이 올바르게 이루어지는지 테스트", () => {
    const racingGame = new RacingGame();
    racingGame.setTotalAttempts(5);
    expect(racingGame.getTotalAttempts()).toBe(5);
  });

  test("라운드 진행이 제대로 이루어지는지 테스트", () => {
    const racingGame = new RacingGame();
    racingGame.setTotalAttempts(3);
    racingGame.playGame();
    expect(racingGame.getCurrentAttempt()).toBe(1);
  });

  test("라운드가 0인 경우에도 정상적으로 진행되는지 테스트", () => {
    const racingGame = new RacingGame();
    racingGame.setTotalAttempts(0);
    racingGame.playGame();
    expect(racingGame.getCurrentAttempt()).toBe(0);
  });
});