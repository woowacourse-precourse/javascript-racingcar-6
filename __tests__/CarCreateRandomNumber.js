import { Car } from '../src/Car';
import { Random } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils');

describe('createRandomNumber 테스트', () => {
  test('0-9랜덤값을 뽑아내는지 확인', () => {
    const car = new Car('test');
    Random.pickNumberInRange.mockReturnValue(5);
    expect(car.createRandomNumber()).toBe(5);
  });
});
