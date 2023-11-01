import CustomError from '../src/CustomError/CustomError';
import Validator from '../src/Validator/Validator';

describe('유효값 테스트', () => {
  test('IsNaN 값 판별 ', () => {
    expect(() => Validator.hasIsNaN('NotANumber')).toThrow(CustomError.ISNAN_ERROR_MSG);
  });

  test('유효한 수', () => {
    expect(() => Validator.hasIsNaN(123)).not.toThrow();
  });

  test('5자 이상이면 안된다', () => {
    expect(() =>
      Validator.checkStringLength('123456').toThrow(CustomError.NOT_OVER_FIVE_CHARACTER),
    );
  });

  test('중복된 이름이 있으면 안된다.', () => {
    const input = ['같다', '같다'];
    expect(() => Validator.checkDuplicate(input)).toThrow(CustomError.NOT_DUPLICATE);
  });

  test('값이 비어있으면 안된다', () => {
    const input = '';
    expect(() => Validator.checkEmpty(input)).toThrow(CustomError.NOT_EMPTY);
  });
});
