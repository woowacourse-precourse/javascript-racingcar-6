import { Console, Random } from '@woowacourse/mission-utils';

import App from '../src/App';
import Car from '../src/Car';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

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

  test('전진-정지 테스트', () => {
    const car = new Car('hCar');
    const outputs = ['', '-', '--'];
    const randoms = [3, 4, 6];

    mockRandoms([...randoms]);

    outputs.forEach((output) => {
      car.moveOrStop();

      expect(car.progress).toBe(output);
    });
  });

  test('우승자 반환 테스트', () => {
    const inputs = ['hCar', 'kCar', 'sCar'];
    const distances = ['--', '-', '--'];
    const cars = inputs.map((input, i) => {
      const car = new Car(input);
      car.progress = distances[i];

      return car;
    });
    const output = 'hCar, sCar';

    const app = new App();
    const result = app.getWinners(cars).join(', ');

    expect(result).toBe(output);
  });
});
