import RacingGame from "../src/RacingGame.js";
import GameUtlis from "../src/utils/GameUtils.js";

describe('게임 진행에 관한 테스트입니다', () => {
  test('시도 횟수만큼 게임이 반복됩니다.', () => {
    // given
    const input = 3;
    const racingGame = new RacingGame();
    racingGame.generateRacingCars(['pobi', 'crong', 'rupee']);
    racingGame.tryOneAttempt = jest.fn();

    // when
    GameUtlis.repeatRacing(input, racingGame);

    // then
    expect(racingGame.tryOneAttempt).toBeCalledTimes(input);
  });

  test('0부터 9사이의 무작위의 값이 나온다.', () => {
    // given
    const answers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // when
    const randomNumber = GameUtlis.generateRandomNumberFromZeroToNine();

    // then
    expect(answers).toContain(randomNumber);
  })
})