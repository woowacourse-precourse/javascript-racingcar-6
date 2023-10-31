import { nameError, numberError } from '../src/gameError.js';
import { INPUT_ERROR } from '../src/message/errorMessage.js';

describe('nameError 함수 테스트', () => {
  test('길이가 5 이상일 때 throw', () => {
    expect(() => nameError(['daffaadff', 'adadfa'])).toThrowError(INPUT_ERROR.lengthError);
  });
  test('이름에 공백이 있을 때 throw', () => {
    expect(() => nameError(['daf ', 'ad a'])).toThrowError(INPUT_ERROR.spaceError);
  });

  test('길이가 5 이하일 때, 공백이 없을 때 not throw', () => {
    expect(() => nameError(['daff', 'as'])).not.toThrowError();
  });
});

describe('numberError 함수 테스트', () => {
  test('숫자 입력이 아닐 때 throw', () => {
    expect(() => numberError('1as')).toThrowError(INPUT_ERROR.numError);
  });
  test('양수가 아닐 때 throw', () => {
    expect(() => numberError('-1', '0')).toThrowError(INPUT_ERROR.numValueError);
  });
  test('입력에 공백이 있을 때 throw', () => {
    expect(() => numberError('1 ')).toThrowError(INPUT_ERROR.spaceError);
  });

  test('숫자, 양수, 입력 모두 정상일 때 not throw', () => {
    expect(() => numberError('12')).not.toThrowError();
  });
});
