import InputValidator from '../../src/validator/inputValidator';

describe('inputValidator 테스트', () => {
  test('입력값에 공백이 있으면 예외를 발생시킨다.', async () => {
    const input = 'a b';
    expect(() => InputValidator.checkhasNoSpace(input)).toThrow('[ERROR]');
  });
  test('입력값에 중복이 있으면 예외를 발생시킨다.', async () => {
    const input = ['a', 'a', 'b'];
    expect(() => InputValidator.checkhasDuplicateName(input)).toThrow(
      '[ERROR]',
    );
  });
  test('입력값에 알파벳이 아닌 문자가 있으면 예외를 발생시킨다.', async () => {
    const input = '!a';
    expect(() => InputValidator.checkhasWrongName(input)).toThrow('[ERROR]');
  });
  test('입력값이 1~5자가 아니면 예외를 발생시킨다.', async () => {
    const input = 'abcdef';
    expect(() => InputValidator.checkIsInNameLengthRange(input)).toThrow(
      '[ERROR]',
    );
  });
});
