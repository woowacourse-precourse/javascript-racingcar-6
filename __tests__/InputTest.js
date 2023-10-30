import { Validator } from '../src/utils/Validator.js';

describe('입력 테스트', () => {
  test('값을 입력하지 않았을 경우, 예외 처리한다.', () => {
    const inputs = ['', null, undefined];

    inputs.forEach((input) => {
      expect(() => Validator.checkNull(input)).toThrow('[ERROR] 값을 입력해주세요.');
    })
  });

  test('각 자동차 이름이 6자 이상일 경우, 예외 처리한다.', () => {
    expect(() => Validator.checkNameLength(['nameislong'])).toThrow('[ERROR] 각 입력값은 5자 이하만 가능합니다.');
  });

  test('숫자가 아닌 입력인 경우, 예외 처리한다.', () => {
    expect(() => Validator.checkCount('string')).toThrow('[ERROR] 입력값이 정수가 아닙니다.');
  });
})