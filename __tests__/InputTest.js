import { getValidInputNames } from '../src/utils';
import { ERROR_MESSAGE } from '../src/constants';

const { 
  NOT_MULTIPLE_NAMES, 
  NOT_NAME_LENGTH, 
  NOT_NUMBER, 
  NOT_RANGE, 
  NOT_UNIQUE,
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