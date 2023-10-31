import { MissionUtils } from '@woowacourse/mission-utils';
import UpdatedInfo from '../src/modules/UpdatedInfo.js';
import Print from '../src/modules/Print.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockCurrentCarInfo = (msgAndInfo) => {
  UpdatedInfo.getCurrentCarInfo = jest.fn();
  msgAndInfo.reduce(
    (acc, cur) => acc.mockReturnValueOnce(cur),
    UpdatedInfo.getCurrentCarInfo,
  );
};

describe('실행 결과와 우승자 가려내기', () => {
  test('실행 결과를 출력 및 반환', () => {
    // given
    const NUMBER_OF_TIMES = 3;
    const EXECUTION_MESSAGE = '실행 결과';
    const input = new Map([
      ['Fiat', 0],
      ['BMW', 0],
      ['Volvo', 0],
    ]);
    const firstTry = [
      'Fiat : -\nBMW :\nVolvo :\n',
      new Map([
        ['Fiat', 1],
        ['BMW', 0],
        ['Volvo', 0],
      ]),
    ];
    const secondTry = [
      'Fiat : --\nBMW : -\nVolvo :\n',
      new Map([
        ['Fiat', 2],
        ['BMW', 1],
        ['Volvo', 0],
      ]),
    ];
    const thirdTry = [
      'Fiat : --\nBMW : -\nVolvo : -\n',
      new Map([
        ['Fiat', 2],
        ['BMW', 1],
        ['Volvo', 1],
      ]),
    ];
    const msgAndInfo = [firstTry, secondTry, thirdTry];
    const messages = [firstTry.at(0), secondTry.at(0), thirdTry.at(0)];
    const output = thirdTry.at(1);
    const logSpy = getLogSpy();

    mockCurrentCarInfo([...msgAndInfo]);

    // when
    const { executeProcess } = Print;
    const updatedCars = executeProcess(input, NUMBER_OF_TIMES);

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(EXECUTION_MESSAGE),
    );
    messages.forEach((message) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(message));
    });
    expect(updatedCars).toStrictEqual(output);
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
