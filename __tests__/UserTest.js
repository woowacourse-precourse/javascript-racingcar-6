import { MissionUtils } from '@woowacourse/mission-utils';
import User from '../src/User';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

test.each([
  [['blue,skyblue']],
  [['blue.black']],
  [['blue ,black']],
  [['blue,black,blue']],
  [['blue']],
])('자동차 이름에 대한 예외 처리', async inputs => {
  mockQuestions(inputs);

  const user = new User();

  await expect(user.inputCarName()).rejects.toThrow('[ERROR]');
});

test.each([[['세번']], [[' ']], [['4 6']]])(
  '시도 횟수에 대한 예외 처리',
  async inputs => {
    mockQuestions(inputs);

    const user = new User();

    await expect(user.inputTryCount()).rejects.toThrow('[ERROR]');
  },
);
