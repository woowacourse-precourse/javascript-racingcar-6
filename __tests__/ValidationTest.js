import ErrorMessage from "../src/errors/ErrorMessage.js";
import validateCarNames from "../src/validator/validateCarNames.js";
import validateRacingCount from "../src/validator/validateRacingCount.js";

describe('Validator 테스트', () => {
  test('자동차 이름에 공백 입력', () => {
    expect(() => { 
      validateCarNames(['']);
    }).toThrow(ErrorMessage);
  });
  
  test('자동차 이름의 길이 초과', () => {
    expect(() => { 
      validateCarNames(['123456', ['good1'], ['good2']]);
    }).toThrow(ErrorMessage);
  });

  test('자동차 이름을 중복 입력', () => {
    expect(() => { 
      validateCarNames(['same', 'same']);
    }).toThrow(ErrorMessage);
  });
});
