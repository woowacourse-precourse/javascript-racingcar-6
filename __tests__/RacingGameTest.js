import Car from '../src/Car.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('랜덤 숫자 생성 기능 테스트', () => {
  test('0에서 9 사이의 무작위 값을 생성', () => {
    const car = new Car('aria');
    const result = car.createRandomNumber();

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(10);
  });
});

describe('자동차 전진 또는 정지 기능 테스트', () => {
  test('자동차가 전진하는 경우 1칸 이동', () => {
    const car = new Car('aria');
    const randoms = [5];

    mockRandoms([...randoms]);
    car.makeStepForwardOrStop();

    const result = car.step;

    expect(result).toEqual(1);
  });

  test('자동차가 정지하는 경우 변화 없음', () => {
    const car = new Car('aria');
    const randoms = [3];

    mockRandoms([...randoms]);
    car.makeStepForwardOrStop();

    const result = car.step;

    expect(result).toEqual(0);
  });
});
