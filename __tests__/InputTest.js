import { getValidInputNames, getValidInputNumber } from '../src/utils';
import { ERROR_MESSAGE } from '../src/constants';

const { 
  NOT_MULTIPLE_NAMES, 
  NOT_NAME_LENGTH, 
  NOT_NUMBER, 
  NOT_RANGE, 
  NOT_UNIQUE,
  NOT_NATURAL_NUMBER,
  NOT_SAFE_INTEGER,
} = ERROR_MESSAGE;

describe('경주할 자동차 이름 예외 테스트', () => {
  test('공백만 있다면 예외 처리되어야 한다.', () => {
    const names = '';

    expect(() => { 
      getValidInputNames(names);
    }).toThrow(NOT_MULTIPLE_NAMES);
  });

  test('2개 미만의 이름이 있다면 예외 처리되어야 한다.', () => {
    const names = 'aaa';

    expect(() => { 
      getValidInputNames(names);
    }).toThrow(NOT_MULTIPLE_NAMES);
  });

  test('1자 미만인 이름이 있다면 예외 처리되어야 한다.', () => {
    const names = 'aaa, ';

    expect(() => { 
      getValidInputNames(names);
    }).toThrow(NOT_NAME_LENGTH);
  });

  test('5자 초과인 이름이 있다면 예외 처리되어야 한다.', () => {
    const names = 'aaa, bb, ccc, abcdef';

    expect(() => { 
      getValidInputNames(names);
    }).toThrow(NOT_NAME_LENGTH);
  });

  test('중복된 이름이 있다면 예외 처리되어야 한다.', () => {
    const names = 'aaa, bb, ccc, abc, aaa';

    expect(() => { 
      getValidInputNames(names);
    }).toThrow(NOT_UNIQUE);
  });
});

describe('자동차 경주 횟수 테스트', () => {
  test('숫자로만 이루어진 값이 아니라면 예외 처리되어야 한다.', () => {
    const names = '12a';

    expect(() => { 
      getValidInputNumber(names);
    }).toThrow(NOT_NUMBER);
  });

  test('1미만의 숫자로 이루어진 값이면 예외 처리되어야 한다.', () => {
    const names = '0';

    expect(() => { 
      getValidInputNumber(names);
    }).toThrow(NOT_RANGE);
  });

  test('자연수가 아니라면 예외 처리되어야 한다.', () => {
    const names = '3.5';

    expect(() => { 
      getValidInputNumber(names);
    }).toThrow(NOT_NATURAL_NUMBER);
  });

  test('Number.MAX_SAFE_INTEGER보다 큰 값은 예외 처리 되어야 한다.', () => {
    const names = String(Number.MAX_SAFE_INTEGER + 1);

    expect(() => { 
      getValidInputNumber(names);
    }).toThrow(NOT_SAFE_INTEGER);
  });
});