import App from '../src/App.js';
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

describe('기능 테스트', () => {
  const app = new App();

  test('잘못된 문자열 입력 시 에러 처리', async () => {
    const inputs = [['pobi,woni,jun']];

    mockQuestions(inputs);

    await app.getNames();

    await expect(app.getNames()).rejects.toThrow(
      '[ERROR] 문자열이 잘못된 형식입니다.',
    );
  });

  test('자동차들의 이름을 입력받아 저장', async () => {
    const inputs = ['pobi,woni,jun'];

    mockQuestions(inputs);

    await app.getNames();

    expect(app.names).toEqual(['pobi', 'woni', 'jun']);
  });

  test('잘못된 숫자 입력 시 에러 처리', async () => {
    const inputs = [[5]];

    mockQuestions(inputs);

    await app.getNumber();

    await expect(app.getNumber()).rejects.toThrow(
      '[ERROR] 숫자가 잘못된 형식입니다.',
    );
  });

  test('실행 횟수를 입력받아 저장', async () => {
    const inputs = [5];

    mockQuestions(inputs);

    await app.getNumber();

    expect(app.number).toEqual(5);
  });

  test('0~9의 랜덤 숫자에 따라 진행 여부 결정', () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];

    mockRandoms([...randoms]);

    app.moveForward(1);

    expect(app.results[1]).toEqual(['-']);
  });

  test('모든 자동차를 랜덤으로 진행시키고 결과를 기록', () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD];

    mockRandoms([...randoms]);

    app.makeResult();

    expect(app.results).toEqual([['-'], ['-'], ['-']]);
  });

  test('결과 배열의 주어진 인덱스가 최댓값을 갱신하는지 확인하고 우승자 배열 갱신', () => {
    app.updateMaximum(0);

    expect(app.winners).toEqual(['pobi']);
    expect(app.max).toEqual(1);
  });

  test('최종 우승자 발표', () => {
    app.winners = [];
    app.max = -Infinity;
    const logSpy = getLogSpy();

    app.winnerAnnouncement();

    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : pobi, woni, jun');
  });
});
