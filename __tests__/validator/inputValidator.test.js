import InputValidator from '../../src/validator/inputValidator';

describe('inputValidator 테스트', () => {
  test('자동차 이름에 공백이 있으면 예외를 발생시킨다', async () => {
    const input = 'a b';
    expect(() => InputValidator.checkHasNoSpace(input)).toThrow('[ERROR]');
  });
  test('자동차 이름에 중복이 있으면 예외를 발생시킨다', async () => {
    const input = ['a', 'a', 'b'];
    expect(() => InputValidator.checkUniqueName(input)).toThrow('[ERROR]');
  });
  test('자동차 이름에 알파벳이 아닌 문자가 있으면 예외를 발생시킨다', async () => {
    const input = '!a';
    expect(() => InputValidator.checkHasRightNameFormat(input)).toThrow(
      '[ERROR]',
    );
  });
  test('자동차 이름이 1~5자가 아니면 예외를 발생시킨다', async () => {
    const input = 'abcdef';
    expect(() => InputValidator.checkNameInRange(input)).toThrow('[ERROR]');
  });
  test('시도할 횟수가 정수가 아니면 예외를 발생시킨다', async () => {
    const input = 'a';
    expect(() => InputValidator.checkInteger(input)).toThrow('[ERROR]');
  });
  test('시도할 횟수가 1 이상이 아니면 예외를 발생시킨다', async () => {
    const input = '0';
    expect(() => InputValidator.checkPositiveInteger(input)).toThrow('[ERROR]');
  });
});
