import ErrorMessage from "../src/errors/ErrorMessage.js";
import validateCarNames from "../src/validator/validateCarNames.js";
import validateRacingCount from "../src/validator/validateRacingCount.js";

describe('Validator 테스트', () => {
  // validateCarNames test
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

  // validateRacingCount test
  test('경주 횟수에 숫자가 아닌 문자를 입력', () => {
    expect(() => { 
      validateRacingCount('One');
    }).toThrow(ErrorMessage);
  });

  test('경주 횟수에 자연수가 아닌 수 입력 : 음수', () => {
    expect(() => { 
      validateRacingCount('-1');
    }).toThrow(ErrorMessage);
  });

  test('경주 횟수에 자연수가 아닌 수 입력 : 0', () => {
    expect(() => { 
      validateRacingCount('0');
    }).toThrow(ErrorMessage);
  });

  test('경주 횟수에 자연수가 아닌 수 입력 : 소수점', () => {
    expect(() => { 
      validateRacingCount('0.5');
    }).toThrow(ErrorMessage);
  });
});
