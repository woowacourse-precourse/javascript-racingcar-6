import Car from '../src/Car';
import Random from '../src/Random';
import Referee from '../src/Referee';

describe('심판 테스트', () => {
  test.each([
    [
      [
        [4, 9, 1],
        [1, 9, 7],
        [3, 2, 5],
      ],
    ],
  ])('레이스 우승 자동차 배열을 반환', (numbers) => {
    const car1 = new Car();
    const car2 = new Car();
    const car3 = new Car();

    numbers.forEach(([first, second, third]) => {
      car1.race(first);
      car2.race(second);
      car3.race(third);
    });

    const winners = Referee.judge([car1, car2, car3]);
    expect(winners).toContain(car2, car3);
  });
});
