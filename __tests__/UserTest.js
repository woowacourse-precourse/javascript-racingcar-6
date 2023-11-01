import { MissionUtils } from '@woowacourse/mission-utils';
import User from '../src/User.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('유저 입력 테스트', () => {
  test.each([[[',car']], [['car,']], [[',car,']]])(
    '문장의 맨 앞이나 뒤에 ,를 입력할 경우 예외 처리',
    async (inputs) => {
      mockQuestions(inputs);

      await expect(User.getCarNameArray()).rejects.toThrow('[ERROR]');
    },
  );

  test('이름이 5자 초과인 차 이름을 입력하는 경우 예외 처리', async () => {
    mockQuestions(['longcar, car']);

    await expect(User.getCarNameArray()).rejects.toThrow('[ERROR]');
  });

  test('같은 이름을 여러 번 입력한 경우 예외 처리', async () => {
    mockQuestions(['carA, carA, carB']);

    await expect(User.getCarNameArray()).rejects.toThrow('[ERROR]');
  });

  test('차 이름을 올바르게 입력한 경우 입력값 반환', async () => {
    mockQuestions(['carA, carB, carC']);
    await expect(await User.getCarNameArray()).toEqual(['carA', 'carB', 'carC']);
  });

  test('숫자 이외의 문자를 입력한 경우 예외 처리', async () => {
    mockQuestions(['abc']);

    await expect(User.getTrialNumber()).rejects.toThrow('[ERROR]');
  });

  test('1 이상의 숫자를 입력한 경우 숫자 반환', async () => {
    mockQuestions(['10']);

    await expect(await User.getTrialNumber()).toEqual(10);
  });

  test.each([[['0']], [['-1']]])('0 이하의 숫자를 입력한 경우 예외 처리', async (inputs) => {
    mockQuestions(inputs);

    await expect(User.getTrialNumber()).rejects.toThrow('[ERROR]');
  });
});
