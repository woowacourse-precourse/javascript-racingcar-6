import { Car } from '../src/App';
import { Console, Random } from '@woowacourse/mission-utils';

describe('자동차 경주 자체 테스트', () => {
  test('객체 생성 테스트', () => {
    const inputs = ['hCar', 'kCar', 'sCar'];

    inputs.forEach((input) => {
      const car = new Car(input);

      expect(car).toBeInstanceOf(Car);
      expect(car.name).toBe(input);
      expect(car.progress).toBe('');
    });
  });
});
