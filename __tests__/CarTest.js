import Car from '../src/Car';

let car;
beforeEach(() => {
  car = new Car('haesa');
});

describe('자동차 테스트', () => {
  test('자동차 이름 가져오기', () => {
    expect(car.getName()).toBe('haesa');
  });

  test('임의의 숫자가 4이상일 때 자동차 전진', () => {
    car.race(0);
    expect(car.getForwardCount()).toBe(0);

    car.race(4);
    expect(car.getForwardCount()).toBe(1);

    car.race(1);
    expect(car.getForwardCount()).toBe(1);

    car.race(9);
    expect(car.getForwardCount()).toBe(2);
  });
});
