import { MissionUtils } from '@woowacourse/mission-utils';
import CarModel from '../src/models/CarModel';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('CarModel 테스트', () => {
  test('getCarModelDTO() 테스트', () => {
    const name = 'pobi';
    const output = { name: 'pobi', position: 0 };

    const carModel = new CarModel(name);

    expect(carModel.getCarModelDTO()).toEqual(output);
  });

  test('move() 테스트', () => {
    const name = 'pobi';
    const MOVE = 4;
    const STOP = 3;
    const randoms = [MOVE, STOP];

    mockRandoms(randoms);

    const carModel = new CarModel(name);

    randoms.forEach(() => carModel.move());

    expect(carModel.position).toBe(1);
  });

  test('isWinner() 테스트', () => {
    const input = 'pobi';
    const WINNER_POS = 1;
    const MOVE = 4;
    const randoms = [MOVE];

    mockRandoms(randoms);

    const carModel = new CarModel(input);
    carModel.move();

    expect(carModel.isWinner(WINNER_POS)).toBe(true);
  });
});
