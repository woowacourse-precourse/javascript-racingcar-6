import Car from '../src/Car';

let car;
beforeEach(() => {
  car = new Car('haesa');
});

describe('자동차 테스트', () => {
  test('자동차 이름 가져오기', () => {
    expect(car.getName()).toBe('haesa');
  });

  test.each([[4, 9]])('임의의 숫자가 4이상일 때 자동차 전진', (number) => {
    car.race(number);
    expect(car.getForwardCount()).toBe(1);
  });

  test.each([0, 1])('임의의 숫자가 4미만일 때 자동차 정지', (number) => {
    car.race(number);
    expect(car.getForwardCount()).toBe(0);
  });
});
