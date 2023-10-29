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
    const inputs = new Map();
    const result = new Map();
    const outputs = ['Fiat : -', 'Fiat : --', 'Fiat : --'];
    const logSpy = getLogSpy();

    inputs.set('Fiat', 0);
    inputs.set('BMW', 0);
    inputs.set('Volvo', 0);

    result.set('Fiat', 2);
    result.set('BMW', 1);
    result.set('Volvo', 1);

    mockRandoms([...randoms]);

    // when
    const { executeProcess } = Print;
    const updatedCars = executeProcess(inputs, NUMBER_OF_TIMES);

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
    expect(updatedCars).toEqual(result);
  });
});
