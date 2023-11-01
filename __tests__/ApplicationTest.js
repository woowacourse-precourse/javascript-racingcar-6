import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { trynumber } from '../src/TryNumber.js';
import { carname } from '../src/CarName.js';
import { winner } from '../src/Winner.js';

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
  // 기능1.test 자동차 이름
  test('이름에 대한 입력조건', async () => {
    // given
    const inputs = 'pobi,jun';
    const outputs = ['pobi', 'jun'];

    // when
    const result = await carname(inputs);

    //then
    expect(result).toEqual(outputs);
  });
  // prettier-ignore
  test.each([[['pobi,javaji']], [['pobi,eastjun']]])('이름에 대한 예외 처리',async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow('[ERROR]');
    },
  );

  // 기능2.test 시도할 횟수
  test('시도 숫자 입력조건', async () => {
    // given
    const inputs = '5';
    const outputs = 5;

    // when
    const result = await trynumber(inputs);

    //then
    expect(result).toEqual(outputs);
  });
  // prettier-ignore
  test.each([[['']],[['a']],[['0']]])('시도 숫자 예외처리', async (inputs) => {
  // given
  mockQuestions(inputs);

  // when
  const app = new App();

  // then
  await expect(app.play()).rejects.toThrow('[ERROR]');
  });

  // 기능3,4,5.test 전진조건
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

  // 기능6.test 우승자 정하기
  test.each([
    [[1, 2, 3], ['car1', 'car2', 'car3'], ['car3']],
    [
      [2, 1, 2],
      ['car1', 'car2', 'car3'],
      ['car1', 'car3'],
    ],
  ])('우승자 찾기', async (result_menu, name, ranking) => {
    // when
    const result = await winner(result_menu, name);

    // then
    expect(result).toEqual(ranking);
  });
  test('우승자 출력조건', async () => {
    // given
    const inputs = ['pobi,woni', '3'];
    const expectedOutputs = ['최종 우승자 : pobi', '최종 우승자 : pobi,woni'];
    const MOVING_FORWARD = 4;
    const MOVING_FORWARD2 = 4;
    const randoms = [MOVING_FORWARD, MOVING_FORWARD2];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    expectedOutputs.forEach((expectedOutput) => {
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(expectedOutput),
      );
    });
  });
});
