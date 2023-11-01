import App from '../src/App.js';
import Car from '../src/racing/Car.js';
import RacingGame from '../src/racing/RacingGame.js';
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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('기능 단위 테스트', () => {
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

  test.each([
    ['pobi,javaji', '[ERROR] : 이름이 다섯 글자를 초과합니다.'],
    ['pobi,pobi', '[ERROR] : 중복된 이름이 있습니다.'],
    ['pobi,po ', '[ERROR] : 이름에 공백이 있습니다.'],
    ['pobi,po@', '[ERROR] : 이름에 특수문자가 있습니다.'],
    ['pobi,', '[ERROR] : 빈 이름이 있습니다.'],
  ])('validation 함수 테스트', (input, message) => {
    expect(() => validation(input.split(','))).toThrow(message);
  });

  test('randomlyMove 메소드 테스트', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const outputs = '---';
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
    ];

    mockRandoms(randoms);

    const car = new Car();

    for (let i = 0; i < randoms.length; i++) car.randomlyMove();
    // then
    expect(car.carDistance).toEqual(outputs);
  });
});
