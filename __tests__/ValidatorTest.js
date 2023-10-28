import Validator from '../src/Validator.js';
import ValidationError from '../src/ValidationError.js';
import { ERROR } from '../src/Constant.js';

describe('입력값 검증 테스트', () => {
  test('에러 발생시 메세지는 [ERROR] 접두사를 가져야한다.', () => {
    const newError = () => {
      throw new ValidationError('error message test');
    };
    expect(newError).toThrow('[ERROR]');
  });

  test('입력값에 중복된 수가 존재하면 오류가 발생되어야 한다.', () => {
    expect(() => Validator.checkHasDuplicate(['pobi', 'yuna', 'pobi']).toThrow(ERROR.hasDuplicate));
  });

  test('입력값에 공백이 존재하면 오류가 발생되어야 한다.', () => {
    expect(() => Validator.checkHasEmpty(['pobi', ''])).toThrow(ERROR.hasEmpty);
  });

  test('입력값이 이름의 최대 길이보다 길면 오류가 발생해야 한다.', () => {
    expect(() => Validator.checkIsLongerThanMaxLen(['pobi', 'kimyuna'])).toThrow(
      ERROR.longerThanMaxLen,
    );
  });

  test('입력값이 숫자가 아니면 오류가 발생해야 한다.', () => {
    expect(() => Validator.checkIsNotNumber('hi!')).toThrow(ERROR.isNotNumber);
  });

  test('입력값이 0이면 오류가 발생해야 한다.', () => {
    expect(() => Validator.checkIsNotMoving(0)).toThrow(ERROR.notMoving);
  });
});
