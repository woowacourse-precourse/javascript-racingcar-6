/* eslint-disable max-lines-per-function */
import { Console } from '@woowacourse/mission-utils';
import { printMessage, throwError } from '../../src/common/utils.js';

describe('메시지 출력 테스트', () => {
  test('메시지 출력 가능 여부', () => {
    const consolePrintSpy = jest.spyOn(Console, 'print');
    
    const message = '시도 횟수는 1 이상을 입력하면 경주가 시작됩니다.';
    printMessage(message);

    expect(consolePrintSpy).toHaveBeenCalledWith(message);
    consolePrintSpy.mockRestore();
  });
});

describe('에러 핸들링 테스트', () => {
  test('true일 때 에러를 던지는지 여부', () => {
    const errorMessage = '[ERROR] 유효한 자동차 이름 형식이 아닙니다.';
    expect(() => throwError(errorMessage, true)).toThrowError(errorMessage);
  });

  test('false일 때 에러를 던지지 않는지 여부', () => {
    const errorMessage = '[ERROR] 유효한 시도 횟수 값이 아닙니다.';
    expect(() => throwError(errorMessage, false)).not.toThrow();
  });
});
