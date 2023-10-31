import Car from '../src/Car.js';

describe('랜덤 숫자 생성 기능 테스트', () => {
  test('0에서 9 사이의 무작위 값을 생성', () => {
    const car = new Car('aria');
    const result = car.createRandomNumber();

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(10);
  });
});
