import { moveCar } from '../src/RacingCar.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('자동차 경주 게임', () => {
  test('랜덤한 숫자에 맞춰 정상적으로 자동차가 움직이는지 테스트', async () => {
    const carObjects = [
      { name: 'car1', position: 0 },
      { name: 'car2', position: 0 },
      { name: 'car3', position: 0 },
    ];

    const randoms = [4, 3, 5];
    mockRandoms(randoms);

    const movedCars = await moveCar(carObjects);

    expect(movedCars).toEqual([
      { name: 'car1', position: 1 },
      { name: 'car2', position: 0 },
      { name: 'car3', position: 1 },
    ]);
  });
});
