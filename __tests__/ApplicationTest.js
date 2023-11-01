import App from '../src/App.js';
import {MissionUtils} from '@woowacourse/mission-utils';

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

  test.each([
    [['pobi,javaji']],
    [['pobi,eastjun']]
  ])('이름에 대한 예외 처리', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});

describe('입력 테스트', () => {
  test('자동차 이름 입력', async () => {
    // given
    const inputs = ['hyun,woong'];
    mockQuestions(inputs);

    // when
    const app = new App();
    const result = await app.getCarNames();

    // then
    expect(result).toEqual([
      {name: 'hyun', position: 0},
      {name: 'woong', position: 0},
    ]);
  });

  test('자동차 이름 입력 예외', async () => {
    // given
    const inputs = ['hyun,hyun'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getCarNames()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 입력 예외', async () => {
    // given
    const inputs = ['hyunwo,oo08'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getCarNames()).rejects.toThrow('[ERROR]');
  });

  test('이동 횟수 입력', async () => {
    // given
    const inputs = ['5'];
    mockQuestions(inputs);

    // when
    const app = new App();
    const result = await app.getMovingCount();

    // then
    expect(result).toEqual(5);
  });

  test('이동 횟수 입력 예외 - 0 이하 정수', async () => {
    // given
    const inputs = ['-1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getMovingCount()).rejects.toThrow('[ERROR]');
  });

  test('이동 횟수 입력 예외 - 문자', async () => {
    // given
    const inputs = ['abc'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.getMovingCount()).rejects.toThrow('[ERROR]');
  });
});

describe('자동차 이동 테스트', () => {
  test('자동차 이동', () => {
    // given
    const MOVING_FORWARD = 4;
    const randoms = [MOVING_FORWARD, MOVING_FORWARD];
    const cars = [
      {name: 'hyun', position: 0},
      {name: 'woong', position: 0},
    ];

    mockRandoms([...randoms]);

    // when
    const app = new App();
    const result = app.moveCars(cars);

    // then
    expect(result).toEqual([
      {name: 'hyun', position: 1},
      {name: 'woong', position: 1},
    ]);
  });

  test('자동차 이동', () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP];
    const cars = [
      {name: 'hyun', position: 1},
      {name: 'woong', position: 0},
    ];

    mockRandoms([...randoms]);

    // when
    const app = new App();
    const result = app.moveCars(cars);

    // then
    expect(result).toEqual([
      {name: 'hyun', position: 2},
      {name: 'woong', position: 0},
    ]);
  });
});

describe('자동차 위치 출력 테스트', () => {
  test('자동차 위치 출력', () => {
    // given
    const cars = [
      {name: 'hyun', position: 3},
      {name: 'woong', position: 0},
    ];
    const outputs = ['hyun : ---', 'woong : '];

    const logSpy = getLogSpy();

    // when
    const app = new App();
    app.printCurrentCarPosition(cars);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

describe('우승자 테스트', () => {
  test('우승자', () => {
    // given
    const cars = [
      {name: 'hyun', position: 3},
      {name: 'woong', position: 0},
    ];

    // when
    const app = new App();
    const result = app.getWinners(cars);

    // then
    expect(result).toEqual([{name: 'hyun', position: 3}]);
  });

  test('우승자', () => {
    // given
    const cars = [
      {name: 'hyun', position: 3},
      {name: 'woong', position: 3},
    ];

    // when
    const app = new App();
    const result = app.getWinners(cars);

    // then
    expect(result).toEqual([
      {name: 'hyun', position: 3},
      {name: 'woong', position: 3},
    ]);
  });
});

describe('우승자 출력 테스트', () => {
  test('우승자 출력', () => {
    // given
    const winners = [
      {name: 'hyun', position: 3},
      {name: 'woong', position: 3},
    ];
    const outputs = ['hyun, woong'];

    const logSpy = getLogSpy();

    // when
    const app = new App();
    app.printWinners(winners);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('우승자 출력', () => {
    // given
    const winners = [
      {name: 'hyun', position: 3},
    ];
    const outputs = ['hyun'];

    const logSpy = getLogSpy();

    // when
    const app = new App();
    app.printWinners(winners);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});