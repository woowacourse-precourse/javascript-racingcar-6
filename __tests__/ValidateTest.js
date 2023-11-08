import App from '../src/App.js';
import { MESSAGE } from '../src/constant';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 게임: 입력값 유효성 검사', () => {
  test.each([
    [['po비,javii', '0']],
    [
      ['pobi,자비', '0'],
      ['123', '하나12', '0'],
    ],
  ])('이름에 대한 예외 처리:5자 이하 모든 문자 가능', async (inputs) => {
    mockQuestions(inputs);

    const logSpy = getLogSpy(jest);
    const app = new App();
    await app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(inputs.join(','))
    );
  });

  test.each([[['pobi,javaji']], [['pobi,eastjun']]])(
    '이름에 대한 예외 처리: 5자 초과 글자 불가',
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow(MESSAGE.nameError);
    }
  );

  test.each([
    [['pobi,woni', '-1']],
    [['pobi,woni', 'one']],
    [['pobi,woni', '하나']],
  ])('이동 횟수 대한 예외 처리: 0이상의 숫자만 가능', async (inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.play()).rejects.toThrow(MESSAGE.roundError);
  });
});
