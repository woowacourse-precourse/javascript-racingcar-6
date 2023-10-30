import { MissionUtils } from '@woowacourse/mission-utils';
import Print from '../src/modules/Print.js';

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

describe('실행 결과와 우승자 가려내기', () => {
  test('실행 결과를 출력 및 반환', () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const NUMBER_OF_TIMES = 3;
    const randoms = [
      MOVING_FORWARD,
      STOP,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
    ];
    const EXECUTION_MESSAGE = '실행 결과';
    const input = new Map([
      ['Fiat', 0],
      ['BMW', 0],
      ['Volvo', 0],
    ]);
    const result = new Map([
      ['Fiat', 2],
      ['BMW', 1],
      ['Volvo', 1],
    ]);
    const outputs = ['Fiat : -', 'Fiat : --', 'Fiat : --'];
    const logSpy = getLogSpy();

    mockRandoms([...randoms]);

    // when
    const { executeProcess } = Print;
    const updatedCars = executeProcess(input, NUMBER_OF_TIMES);

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(EXECUTION_MESSAGE),
    );
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
    expect(updatedCars).toStrictEqual(result);
  });

  test('우승자 가려내기', () => {
    // given
    const doubleWinner = new Map([
      ['Fiat', 3],
      ['BMW', 1],
      ['Volvo', 3],
      ['Jeep', 2],
    ]);
    const allWinner = new Map([
      ['Fiat', 1],
      ['BMW', 1],
      ['Volvo', 1],
      ['Jeep', 1],
    ]);
    const onlyWinner = new Map([
      ['Fiat', 2],
      ['BMW', 0],
      ['Volvo', 4],
      ['Jeep', 2],
    ]);
    const inputs = [doubleWinner, allWinner, onlyWinner];
    const outputs = ['Fiat, Volvo', 'Fiat, BMW, Volvo, Jeep', 'Volvo'];
    const logSpy = getLogSpy();

    // when
    const { announceWinner } = Print;

    // then
    inputs.forEach((input, idx) => {
      announceWinner(input);
      expect(logSpy).toHaveBeenCalledWith(
        expect.stringContaining(outputs[idx]),
      );
    });
  });
});
