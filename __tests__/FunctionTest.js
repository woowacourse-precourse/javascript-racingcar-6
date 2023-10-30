import App from '../src/App.js';
import Car from '../src/racing/Car.js';
import validation from '../src/view/Validation.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('자동차 경주 게임', () => {
  test('canMove 메소드 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];
    const result = [true, false];

    const car = new Car();

    randoms.forEach((number, index) => {
      mockRandoms([number]);
      const canMove = car.canMove();
      expect(canMove).toBe(result[index]);
    });
  });
});
