import { MissionUtils } from '@woowacourse/mission-utils';
import Car from '../../src/Model/Car.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('Car Model Test', () => {
  test('Car 정상 이동 테스트', async () => {
    // given
    const carName = 'a,b,c';
    const randomNum = [1, 4, 3];
    mockRandoms([...randomNum]);

    // when
    const car = new Car();
    car.setCarsPosition(carName);
    car.setCarsRelocation();

    // then
    await expect(car.getCarsPosition()).toEqual([
      { name: 'a', position: '' },
      { name: 'b', position: '-' },
      { name: 'c', position: '' },
    ]);
  });
});
