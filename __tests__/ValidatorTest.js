import Validator from '../src/utils/Validator';

describe('Validator 함수 테스트', () => {
  test('5글자 초과 시 예외 처리', () => {
    const input = 'abcdefghi,abc';

    expect(() => Validator.validCarList(input)).toThrow('[ERROR]');
  });

  test('음의 정수 입력 시 예외 처리', () => {
    const input = '-1';

    expect(() => Validator.rangeOverZero(input)).toThrow('[ERROR]');
  });

  test('정수 이외의 입력값에 대한 예외 처리', () => {
    const input = 'abcd';

    expect(() => Validator.rangeOverZero(input)).toThrow('[ERROR]');
  });

  test('5글자 초과 시 false 반환', () => {
    const input = 'abcdef';

    expect(Validator.validLength(input, { maxLength: 5 })).toBe(false);
  });
});
