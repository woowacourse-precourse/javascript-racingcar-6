import Validation from '../src/Validation';
import { ERROR } from '../src/Constants';

describe('자동차 이름 입력 테스트', () => {
  test('자동차 이름 길이 제한(5자 이하)', () => {
    const validInput = 'pobi,min';
    const errorInput = 'pobi,jeongin';

    expect(() => Validation.validCarNameLength(validInput)).not.toThrow();
    expect(() => Validation.validCarNameLength(errorInput)).toThrow(ERROR.CAR_NAME_LENGTH);
  });
});
