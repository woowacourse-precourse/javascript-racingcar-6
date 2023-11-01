import BaseExceptionHandler from '../src/exception/Errorcase';

import CarNaming from '../src/exception/CarNaming';
import Frequency from '../src/exception/Frequency';

describe('CarNaming클래스 - 자동차 이름 예외처리 로직', () => {
  let exception;
  beforeEach(() => {
    exception = new BaseExceptionHandler();
  });

  test('입력값 [sasasas]', () => {
    const input = ['sasasas'];
    const result = () => exception.checkAllException(new CarNaming(input));

    expect(result).toThrow();
  });

  test('입력값 [aaaaaa, bbbbbb]', () => {
    const input = ['aaaaaa', 'bbbbbb'];
    const result = () => exception.checkAllException(new CarNaming(input));

    expect(result).toThrow();
  });

  test('입력값을 주지 않았을 때 ', () => {
    const input = '';
    const result = () => exception.checkAllException(new CarNaming(input));

    expect(result).toThrow();
  });

  test('입력값(중복) [aaaaa, aaaaa]', () => {
    const input = ['aaaaa', 'aaaaa'];
    const result = () => exception.checkAllException(new CarNaming(input));

    expect(result).toThrow();
  });

  test('입력값의 크기가 넘어갈 때', () => {
    const input = new Array(22).map((_, idx) => String.fromCodePoint(idx + 97));
    const result = () => exception.checkAllException(new CarNaming(input));

    expect(result).toThrow();
  });

  test('입력값 [a   a, b   b]', () => {
    const input = ['a   a', ' b   b'];
    const result = () => exception.checkAllException(new CarNaming(input));

    expect(result).toThrow();
  });

  test('입력값 [우테코, 사랑해]', () => {
    const input = ['우테코', '사랑해'];
    const result = () => exception.checkAllException(new CarNaming(input));

    expect(result).toThrow();
  });
  test('입력값 [aaa, , ccc]', () => {
    const input = ['aaa', '', 'ccc'];
    const result = () => exception.checkAllException(new CarNaming(input));

    expect(result).toThrow();
  });
  test('입력값 [#^&@#, **#&]', () => {
    const input = ['#^&@#', '**#&'];
    const result = () => exception.checkAllException(new CarNaming(input));

    expect(result).toThrow();
  });
});

describe('Frequency클래스 - 게임 횟수 예외처리 로직', () => {
  let exception;
  beforeEach(() => {
    exception = new BaseExceptionHandler();
  });

  test('입력값 1.2', () => {
    const input = 1.2;
    const result = () => exception.checkAllException(new Frequency(input));

    expect(result).toThrow();
  });

  test('입력값 -1', () => {
    const input = -1;
    const result = () => exception.checkAllException(new Frequency(input));

    expect(result).toThrow();
  });

  test('입력값 999', () => {
    const input = 999;
    const result = () => exception.checkAllException(new Frequency(input));

    expect(result).toThrow();
  });

  test('입력값 ㅇㅌㅋㅅㄹㅎ', () => {
    const input = 'ㅇㅌㅋㅅㄹㅎ';
    const result = () => exception.checkAllException(new Frequency(input));

    expect(result).toThrow();
  });
});
