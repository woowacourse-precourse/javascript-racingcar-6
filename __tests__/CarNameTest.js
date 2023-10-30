import Validation from '../src/Validation';
import { ERROR } from '../src/Constants';

describe('자동차 이름 입력 테스트', () => {
  test('자동차 이름 길이 제한(5자 이하)', () => {
    const validInput = 'pobi,min';
    const errorInput = 'pobi,jeongin';

    expect(() => Validation.validCarNameLength(validInput)).not.toThrow();
    expect(() => Validation.validCarNameLength(errorInput)).toThrow(ERROR.CAR_NAME_LENGTH);
  });

  test('문자열 외 입력 제한', () => {
    const validInput = 'pobi,min';
    const errorInput = 'pobi,3$#8';

    expect(() => Validation.validateCarNameAlphabetic(validInput)).not.toThrow();
    expect(() => Validation.validateCarNameAlphabetic(errorInput)).toThrow(ERROR.CAR_NAME_TYPE);
  });

  test('중복성 검사', () => {
    const validInput = 'pobi,min,hasu';
    const errorInput = 'pobi,min,pobi,hasu';

    expect(() => Validation.validateCarNameDuplicate(validInput)).not.toThrow();
    expect(() => Validation.validateCarNameDuplicate(errorInput)).toThrow(ERROR.CAR_NAME_DUPLICATE);
  });
});
