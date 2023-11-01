import { GAME } from '../src/Constant';
import Car from '../src/Car';
import { mockRandoms } from './ApplicationTest';

const testCase = Array.from({ length: 10 }, (_, index) => [
  index,
  index < GAME.MOVEMENT_THRESHOLD ? 0 : index,
]);

describe('Car 클래스', () => {
  test.each(testCase)(
    `자동차는 ${GAME.MIN_MOVEMENT}와 ${GAME.MAX_MOVEMENT} 사이에서 무작위 값이 ${GAME.MOVEMENT_THRESHOLD} 이상일 경우에만 전진한다.`,
    (random, result) => {
      const car = new Car(random);
      mockRandoms([random]);

      car.move();
      expect(car.distance).toBe(result);
    }
  );
});
