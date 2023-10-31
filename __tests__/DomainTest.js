import { Random } from '@woowacourse/mission-utils';
import Car from '../src/domain/Car';
import { GAME_RULE_NUMBER } from '../src/constant/Constants.js';

describe('게임 기능 테스트', () => {
  describe('Car Class 테스트', () => {
    let car;
    beforeAll(() => {
      car = new Car('woni');
      Random.pickNumberInRange = jest.fn();
    });
    test('move()는 기준 숫자보다 랜덤 숫자가 작으면 전진', () => {
      Random.pickNumberInRange.mockReturnValue(
        GAME_RULE_NUMBER.thresholdNum + 1,
      );
      car.move();
      car.move();
      car.move();
      expect(car.getProgress()).toBe(3);
    });

    test('move()는 기준 숫자보다 랜덤 숫자가 작으면 정지', () => {
      Random.pickNumberInRange.mockReturnValue(
        GAME_RULE_NUMBER.thresholdNum - 1,
      );
      car.move();
      expect(car.getProgress()).toBe(3);
    });

    test('getName()은 인스턴스의 name을 반환', () => {
      expect(car.getName()).toBe('woni');
    });
    test('getProgress()는 인스턴스의 progress를 반환', () => {
      expect(car.getProgress()).toBe(3);
    });
  });
});
