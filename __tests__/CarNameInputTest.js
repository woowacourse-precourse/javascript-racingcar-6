import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR, RESULT } from '../src/messages.js';

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

describe('자동차 이름 유효성 테스트', () => {
  test.each([[[' ']], [[',']], [[' ,']], [[', ']]])(
    '자동차 이름이 공백인 경우',
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow(ERROR.INVALID_NAME);
    }
  );

  test.each([
    [['ABCDEF']],
    [['ABC,ABCDEF']],
    [['ABCDEF,ABC']],
    [['ABCDEF,BCDEFG']],
    [['가나다라마바사']],
  ])('자동차 이름이 5자를 초과하는 경우', async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR.TOO_LONG_NAME);
  });

  test.each([
    [['123,123']],
    [['ABC,ABC']],
    [['가나다라,가나다라']],
    [['@@,@@']],
  ])('중복된 자동차 이름이 존재하는 경우', async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow(ERROR.DUPLICATED_NAME);
  });

  test.each([
    [['123', '1']],
    [['ABC,ABCD', '2']],
    [['가나다라,가나다라마', '3']],
    [['@@,@@#', '4']],
  ])('유효한 자동차 이름을 입력한 경우', async (inputs) => {
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([1, 10]);

    const app = new App();
    await app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(RESULT.WINNERS)
    );
  });
});
