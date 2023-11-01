import {
  validateCarNames,
  validateAttemptNumber,
} from '../src/utils/validation';
describe(' 유효값 검사 기능 테스트', () => {
  test('이름 공백 입력', () => {
    const nameInput = '';

    expect(() => {
      validateCarNames(nameInput);
    }).toThrow();
  });

  test('이름 중복 포함', () => {
    const nameInput = ['pobi', 'pobi', 'woni'];

    expect(() => {
      validateCarNames(nameInput);
    }).toThrow();
  });

  test('시도 횟수가 숫자가 아닌 것 포함', () => {
    const triesInput = ['123abc', '1!23', '#asfg'];

    triesInput.forEach((times) => {
      expect(() => {
        validateAttemptNumber(times);
      }).toThrow();
    });
  });

  test('시도 횟수가 자연수가 아닌 수', () => {
    const triesInput = ['0', '-1'];

    triesInput.forEach((times) => {
      expect(() => {
        validateAttemptNumber(times);
      }).toThrow();
    });
  });
});
