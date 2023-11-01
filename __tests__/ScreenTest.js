import Screen from '../src/Screen.js';
import { Console } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('Screen.makeDashString', () => {
  test('전달된 숫자만큼 -를 생성한다', () => {
    expect(Screen.makeDashString(1)).toBe('-');
    expect(Screen.makeDashString(2)).toBe('--');
    expect(Screen.makeDashString(3)).toBe('---');
    expect(Screen.makeDashString(4)).toBe('----');
    expect(Screen.makeDashString(5)).toBe('-----');
    expect(Screen.makeDashString(6)).toBe('------');
  });
});

describe('Screen.printMessage', () => {
  test('메시지를 콘솔에 출력해야 한다', () => {
    // given
    const message = 'test';
    const logSpy = getLogSpy();

    // when
    Screen.printMessage(message);

    // then
    expect(logSpy).toHaveBeenCalledWith(message);
  });
});

describe('Screen.printWinner', () => {
  test('배열로 전달된 목록을 콤마로 구분하여 우승자를 출력해야 한다', () => {
    // given
    const winnerList = ['a', 'b', 'c'];
    const logSpy = getLogSpy();
    const outputs = '최종 우승자 : a, b, c';

    // when
    Screen.printWinner(winnerList);

    // then
    expect(logSpy).toHaveBeenCalledWith(outputs);
  });
});

describe('Screen.getUserInput', () => {
  test('사용자가 입력한 값을 반환해야 한다.', async () => {
    // given
    const userInput = ['pobi,woni', '1'];
    mockQuestions(userInput);

    // when
    // then
    for await (const input of userInput) {
      const result = await Screen.getUserInput();
      expect(result).toBe(input);
    }
  });
});
