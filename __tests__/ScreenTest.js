import Screen from '../src/Screen.js';
import { Console } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
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

describe('Screen.printEmptyLine', () => {
  test('빈 행을 콘솔에 출력해야 한다.', () => {
    // given
    const logSpy = getLogSpy();

    // when
    Screen.printEmptyLine();

    // then
    expect(logSpy).toHaveBeenCalledWith('');
  });
});
