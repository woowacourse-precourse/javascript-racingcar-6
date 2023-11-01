import Validator from '../src/utils/Validator.js';
import ValidationError from '../src/utils/ValidationError.js';
import { ERROR } from '../src/constants/Constant.js';

describe('입력값 검증 테스트', () => {
  test('에러 발생시 메세지는 [ERROR] 접두사를 가져야한다.', () => {
    // when
    const newError = () => {
      throw new ValidationError('error message test');
    };

    // then
    expect(newError).toThrow('[ERROR]');
  });

  test.each([[['pobi', '']], [['']]])(
    '자동차의 이름 중 공백이 존재하면 오류가 발생되어야 한다.',
    (names) => {
      // then
      expect(() => Validator.checkHasEmpty(names)).toThrow(ERROR.hasEmpty);
    },
  );

  test.each([[['pobi', 'yuna', 'pobi']], [['yuna', 'yuna', 'yuna']]])(
    '자동차의 이름 중 중복된 이름이 존재하면 오류가 발생되어야 한다.',
    (names) => {
      // then
      expect(() => Validator.checkHasDuplicate(names).toThrow(ERROR.hasDuplicate));
    },
  );

  test.each([[['pobi', 'kimyuna']], [['kimyuna']]])(
    '자동차의 이름이 최대 길이보다 길면 오류가 발생해야 한다.',
    (names) => {
      // then
      expect(() => Validator.checkIsLongerThanMaxLen(names)).toThrow(ERROR.longerThanMaxLen);
    },
  );

  test.each([[''], ['hi'], ['!']])('입력값이 숫자가 아니면 오류가 발생해야 한다.', (input) => {
    // then
    expect(() => Validator.checkIsNotNumber(input)).toThrow(ERROR.isNotNumber);
  });

  test.each([['0'], [0]])('입력값이 0이면 오류가 발생해야 한다.', (input) => {
    // then
    expect(() => Validator.checkIsNotMoving(input)).toThrow(ERROR.notMoving);
  });
});
