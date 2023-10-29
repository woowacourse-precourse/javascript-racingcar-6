import { describe, expect, test, jest } from '@jest/globals';
import { MissionUtils } from '@woowacourse/mission-utils';
import { inputCarName, inputNumber, printAction, printResult } from '../src/InOutPut';

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('입력 테스트', () => {
  test('split 메서드로 주어진 값을 구분 후 검증하여 반환', async () => {
    const input = 'poni,jojo,poro';

    mockQuestions(input);
    const result = await inputCarName();

    expect(result).toContain('poni', 'jojo', 'poro');
  });

  test('잘못된 입력 값 검증', async () => {
    const input = 'poniponi,jojo,porp';

    mockQuestions(input);

    expect(inputCarName()).rejects.toThrow('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
  });

  test('횟수 입력 검증', async () => {
    const input = '3';

    mockQuestions(input);
    const result = await inputNumber();

    expect(result).toEqual(3);
  });
});

describe('출력 테스트', () => {
  test('gameResult 출력', () => {
    const gameResult = [
      ['poni', 1],
      ['jojo', 2],
      ['poro', 3]
    ];

    const logSpy = getLogSpy();
    const result = ['poni : -', 'jojo : --', 'poro : ---'];
    printAction(gameResult);

    result.forEach((res) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(res));
    });
  });

  test('champion 출력', () => {
    const champion = ['poni'];
    const logSpy = getLogSpy();
    const result = ['최종 우승자: poni'];
    printResult(champion);

    result.forEach((res) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(res));
    });
  });

  test('champion 출력', () => {
    const champion = ['poni', 'jojo'];
    const logSpy = getLogSpy();
    const result = ['최종 우승자: poni, jojo'];
    printResult(champion);

    result.forEach((res) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(res));
    });
  });
});
