import Car from '../src/domain/Car.js';

describe('Car', () => {
  test('전진조건 해당시, 기존 progress 필드값이 1 증가되는지 테스트한다.', () => {
    const car = new Car('자동차');
    const progress = car.getProgress();

    car.move();

    const currentProgress = car.getProgress();

    expect(currentProgress).toBe(progress + 1);
  });
});
