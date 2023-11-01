import { Random } from '@woowacourse/mission-utils';
import RacingCar from '../src/models/RacingCar';
import RacingGame from '../src/models/RacingGame';
import { GAME_NUMBERS } from '../src/utils/constants';

Random.pickNumberInRange = jest.fn();

const mockRandomNumber = number => {
  Random.pickNumberInRange.mockReturnValue(number);
};

describe('RacingGame 테스트', () => {
  let game;

  beforeEach(() => {
    game = new RacingGame();
  });

  describe('차량 설정과 모든 차량의 이동 결과 가져오기 테스트', () => {
    it('모든 차량의 이동 결과를 문자열로 반환한다.', () => {
      const car = new RacingCar('testCar');
      game.setCars([car]);
      expect(game.getAllCarsMovementHistory()).toBe('testCar : ');
    });
  });

  describe('게임 종료 테스트', () => {
    it('차량 이동 후, 게임을 종료하고 최종 우승자를 설정한다.', () => {
      const car1 = new RacingCar('testCar1');
      const car2 = new RacingCar('testCar2');
      game.setCars([car1, car2]);

      mockRandomNumber(GAME_NUMBERS.movementThreshold + 1);
      car1.move();
      mockRandomNumber(GAME_NUMBERS.movementThreshold - 1);
      car2.move();

      game.concludeGame();
      expect(game.getWinners()).toEqual(['testCar1']);
    });
  });
});
