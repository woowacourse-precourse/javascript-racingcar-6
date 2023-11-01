import { validateAttempts, validateCarNames } from '../../src/utils/validator.js';

import AppError from '../../src/errors/AppError.js';

test('validateCarNames 함수가 유효한 차 이름을 정상적으로 검증하는지 확인', () => {
  // given
  const inputs = ['toto', 'Mori', 'bmw3', '3232', '한글', ' ', '?'];
  const outputs = [true, true, false, false, false, false, false];

  // when - then
  inputs.forEach((input, index) => {
    if (outputs[index]) {
      expect(() => validateCarNames(input)).not.toThrow(AppError);
    } else {
      expect(() => validateCarNames(input)).toThrow(AppError);
    }
  });
});

test('validateAttempts 함수가 1부터 최대 100까지의 수를 검증하는지 확인', () => {
  // given
  const inputs = ['1', '9', '101', '0', '100', '52'];
  const outputs = [true, true, false, false, true, true];

  // when - then
  inputs.forEach((input, index) => {
    if (outputs[index]) {
      expect(() => validateAttempts(input)).not.toThrow(AppError);
    } else {
      expect(() => validateAttempts(input)).toThrow(AppError);
    }
  });
});
