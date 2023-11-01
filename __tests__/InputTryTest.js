import validate, { Validation } from '../src/utils/validation';

describe('시도 횟수 입력', () => {
  // Success Test
  test('숫자를 입력받은 경우', () => {
    const input = '8';
    expect(input).toContain('8');
  });

  // Error Test
  test('입력 값이 없는 경우', () => {
    const input = '';
    expect(validate.tryValidation(input)).rejects.toThrow('[ERROR]');
  });

  test('입력 값이 문자인 경우', () => {
    const input = 'aaa';
    expect(validate.tryValidation(input)).rejects.toThrow('[ERROR]');
  });

  test('입력 값이 0인 경우', () => {
    const input = '0';
    expect(validate.tryValidation(input)).rejects.toThrow('[ERROR]');
  });
});
