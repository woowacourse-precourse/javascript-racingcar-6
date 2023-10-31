import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

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
    // console.log('@@@', number);
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
  // console.log('!!!', numbers);
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
    const logSpy = getLogSpy();

    const randoms = [MOVING_FORWARD, STOP];
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

  test('전진 여러번', async () => {
    // given
    const randomArr = [4, 3, 4, 3, 4, 3];
    const inputs = ['pobi,woni', '3'];
    const outputs = [
      'pobi : -',
      'woni :',
      'pobi : --',
      'woni :',
      'pobi : ---',
      'woni :',
      '최종 우승자 : pobi',
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randomArr]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('전진-정지 우승자 여러명', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const MOVING_FORWARD2 = 4;

    const inputs = ['pobi,woni,jy', '1'];
    const outputs = ['pobi : -', 'woni :', 'jy : -', '최종 우승자 : pobi, jy'];
    const logSpy = getLogSpy();

    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD2];
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

  test('전진-정지 우승자 없음', async () => {
    // given
    const MOVING_FORWARD = 3;
    const STOP = 3;

    const inputs = ['pobi,woni', '1'];
    const outputs = ['최종 우승자 :'];
    const logSpy = getLogSpy();

    const randoms = [MOVING_FORWARD, STOP];
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

  test('전진 여러번 우승자 여러명', async () => {
    // given
    const randomArr = [4, 5, 4, 9, 4, 4];
    const inputs = ['pobi,woni', '3'];
    const outputs = [
      'pobi : -',
      'woni : -',
      'pobi : --',
      'woni : --',
      'pobi : ---',
      'woni : ---',
      '최종 우승자 : pobi, woni',
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randomArr]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach(output => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[['pobi,javaji']], [['pobi,eastjun']], [['pobi,pobi,pobi']]])(
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

  test('숫자를 입력하지 않음', async () => {
    // given
    const inputs = ['pobi,woni', 'a'];

    mockQuestions(inputs);

    // when
    const app = new App();

    await expect(app.play()).rejects.toThrow('[ERROR]');
  });
});
