import RacingGame from '../src/RacingGame';
import { Console } from '@woowacourse/mission-utils';


describe('RacingGame 클래스 테스트', () => {
  let racingGame;

  beforeEach(() => {
    racingGame = new RacingGame('Car1,Car2', 5);
    Console.print = jest.fn();
  });

  test('RacingGame 클래스 playGame 메서드 테스트', () => {
    const printPositionsSpy = jest.spyOn(racingGame, 'printPositions');
    const printWinnersSpy = jest.spyOn(racingGame, 'printWinners');
    racingGame.playGame();
    expect(printPositionsSpy).toHaveBeenCalledTimes(5); // 5회 반복 확인
    expect(printWinnersSpy).toHaveBeenCalled();
  });
});
