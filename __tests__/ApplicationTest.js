import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import Check from '../src/module/Check.js';
import initializeCarData from '../src/module/InitializeCarData.js';
import printFinish from '../src/module/Result.js';
import getUserInput from '../src/module/Start.js';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
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

describe('자동차 경주 게임', () => {
  test('전진-정지', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const outputs = ['pobi : -'];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[['pobi,javaji']], [['pobi,eastjun']]])(
    '이름에 대한 예외 처리',
    async inputs => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow('[ERROR]');
    },
  );

  test('유효한 자동차 이름과 횟수 입력', async () => {
    const readLineAsyncMock = jest.spyOn(MissionUtils.Console, 'readLineAsync');
    readLineAsyncMock.mockReturnValueOnce('가,나,다');
    readLineAsyncMock.mockReturnValueOnce('5');
    const userInput = await getUserInput();
    expect(userInput).toEqual({
      userCount: 5,
      carNames: ['가', '나', '다'],
    });
  });

  test('이름에 대한 예외 처리 추가', async () => {
    const readLineAsyncMock = jest.spyOn(MissionUtils.Console, 'readLineAsync');
    readLineAsyncMock.mockReturnValueOnce(',   ,123456');
    readLineAsyncMock.mockReturnValueOnce('5');
    await expect(getUserInput()).rejects.toThrow('[ERROR] 자동차 이름을 잘못 입력했습니다.');
  });

  test('횟수가 음수일 때 예외 처리', async () => {
    const readLineAsyncMock = jest.spyOn(MissionUtils.Console, 'readLineAsync');
    readLineAsyncMock.mockReturnValueOnce('가,나,다');
    readLineAsyncMock.mockReturnValueOnce('-1');
    await expect(getUserInput()).rejects.toThrow('[ERROR] 시도 횟수를 잘못 입력했습니다.');
  });

  test('횟수가 undefined일 때 예외 처리', async () => {
    const readLineAsyncMock = jest.spyOn(MissionUtils.Console, 'readLineAsync');
    readLineAsyncMock.mockReturnValueOnce('가,나,다');
    readLineAsyncMock.mockReturnValueOnce(undefined);
    await expect(getUserInput()).rejects.toThrow('[ERROR] 시도 횟수를 잘못 입력했습니다.');
  });

  test('횟수가 문자일 때 예외 처리', async () => {
    const readLineAsyncMock = jest.spyOn(MissionUtils.Console, 'readLineAsync');
    readLineAsyncMock.mockReturnValueOnce('가,나,다');
    readLineAsyncMock.mockReturnValueOnce('abc');
    await expect(getUserInput()).rejects.toThrow('[ERROR] 시도 횟수를 잘못 입력했습니다.');
  });

  test('차 이름 목록 객체 value 초기화', () => {
    const initializeData = initializeCarData(['가', '나', '다']);
    expect(initializeData).toEqual({ 가: '', 나: '', 다: '' });
  });

  test('단독 우승자 안내', () => {
    const carData = { 가: '---', 나: '--', 다: '----' };
    const USER_COUNT = 3;
    printFinish(carData, USER_COUNT);
    expect(MissionUtils.Console.print).toHaveBeenCalledWith('최종 우승자 : 다');
  });

  test('공동 우승자 안내', () => {
    const carData = { 가: '----', 나: '--', 다: '----' };
    const USER_COUNT = 3;
    printFinish(carData, USER_COUNT);
    expect(MissionUtils.Console.print).toHaveBeenCalledWith(
      '최종 우승자 : 가, 다',
    );
  });
});