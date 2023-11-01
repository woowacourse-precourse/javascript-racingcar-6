/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

// 게임 로직 테스트 코드
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
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('전진-전진', async () => {
    // given
    const MOVING_FORWARD = 4;
    const inputs = ['pobi,woni', '1'];
    const outputs = ['pobi : -', 'woni : -'];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('정지-정지', async () => {
    // given
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const outputs = ['pobi : ', 'woni : '];
    const randoms = [STOP, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

// 입력 유효성 테스트
describe('입력 유효성 검사', () => {
  test.each([
    [['pobi,javaji']],
    [['pobi,eastjun']],
    ['asf'],
    ['asdfasdf'],
    [['asdfasdf asdfdsf']],
    [['car1,car 2']],
  ])('자동차 이름에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('시도횟수 입력에 대한 예외 처리', async () => {
    // given
    const input = 'aa';
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  test('빈 문자열 입력', () => {
    // given
    const input = [''];
    mockQuestions(input);
    // when
    const app = new App();

    // then
    expect(app.play()).rejects.toThrow('[ERROR]');
  });
});

// 우승자 테스트
describe('최종 우승자', () => {
  test('하나의 우승자', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['car1,car2', '1'];
    const randoms = [MOVING_FORWARD, STOP];
    const expectedOutput = '최종 우승자 : car1';
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedOutput),
    );
  });

  test('여러 우승자', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['car1,car2,car3', '1'];
    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD];
    const expectedOutput = '최종 우승자 : car1, car3';
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(expectedOutput),
    );
  });
});

// 플레이 횟수 테스트
describe('다양한 플레이 횟수', () => {
  test('플레이 횟수 2', async () => {
    // given
    const inputs = ['car1,car2', '2'];
    const randoms = [4, 4, 3, 3];
    const expectedOutputs = ['car1 : -', 'car2 : -', 'car1 : -', 'car2 : -'];
    const logSpy = getLogSpy();

    // when
    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.play();

    // then
    expectedOutputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  // 다른 플레이 횟수 테스트 케이스 추가
  test('플레이 횟수 5', async () => {
    // given
    const inputs = ['car1,car2,car3', '5'];
    const randoms = [4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 3, 4];
    const expectedOutputs = [
      'car1 : -',
      'car2 :',
      'car3 : -',
      'car1 : --',
      'car2 : -',
      'car3 : --',
      'car1 : --',
      'car2 : --',
      'car3 : ---',
      'car1 : ---',
      'car2 : ---',
      'car3 : ----',
      'car1 : ----',
      'car2 : --',
      'car3 : -----',
    ];
    const logSpy = getLogSpy();

    // when
    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.play();

    // then
    expectedOutputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
