import RacingGame from "../src/RacingGame";
import GameUtlis from "../src/utils/GameUtils";

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
  })
})