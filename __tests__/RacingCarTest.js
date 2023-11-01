import { Random } from '@woowacourse/mission-utils';
import RacingCar from '../src/models/RacingCar';
import { GAME_NUMBERS } from '../src/utils/constants';

Random.pickNumberInRange = jest.fn();

const mockRandomNumber = number => {
  Random.pickNumberInRange.mockReturnValue(number);
};

describe('RacingCar 테스트', () => {
  let car;

  beforeEach(() => {
    car = new RacingCar('testCar');
  });

  describe('초기화 상태 테스트', () => {
    it('차량 이름 초기화 테스트', () => {
      expect(car.getName()).toEqual('testCar');
    });

    it('차량 위치 초기화 테스트', () => {
      expect(car.getPosition()).toEqual(0);
    });

    it('차량 이동 결과 문자열 초기화 테스트', () => {
      expect(car.getMovementHistory()).toEqual('testCar : ');
    });
  });

  describe('차량 이동 테스트', () => {
    it('무작위 숫자가 기준 수 이상일 때 이동하는지 테스트', () => {
      mockRandomNumber(GAME_NUMBERS.movementThreshold);
      car.move();
      expect(car.getMovementHistory()).toEqual('testCar : -');
    });

    it('무작위 숫자가 기준 수 미만일 때 이동하지 않는지 테스트', () => {
      mockRandomNumber(GAME_NUMBERS.movementThreshold - 1);
      car.move();
      expect(car.getMovementHistory()).toEqual('testCar : ');
    });
  });
});
