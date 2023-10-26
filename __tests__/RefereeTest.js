import Car from '../src/Car';
import Random from '../src/Random';
import Referee from '../src/Referee';

describe('심판 테스트', () => {
  test('레이스 우승 자동차 배열을 반환', () => {
    const car1 = new Car();
    const car2 = new Car();
    const car3 = new Car();

    car1.race(4);
    car2.race(9);
    car3.race(1);

    const winners = Referee.judge([car1, car2, car3]);
    expect(winners).toContain(car1, car2);
  });
});
