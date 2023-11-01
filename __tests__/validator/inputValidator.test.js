import InputValidator from '../../src/validator/inputValidator';

describe('inputValidator 테스트', () => {
  test('자동차 이름에 공백이 있으면 예외를 발생시킨다', async () => {
    const input = 'a b';
    expect(() => InputValidator.checkhasNoSpace(input)).toThrow('[ERROR]');
  });
  test('자동차 이름에 중복이 있으면 예외를 발생시킨다', async () => {
    const input = ['a', 'a', 'b'];
    expect(() => InputValidator.checkhasDuplicateName(input)).toThrow(
      '[ERROR]',
    );
  });
  test('자동차 이름에 알파벳이 아닌 문자가 있으면 예외를 발생시킨다', async () => {
    const input = '!a';
    expect(() => InputValidator.checkhasWrongName(input)).toThrow('[ERROR]');
  });
  test('자동차 이름이 1~5자가 아니면 예외를 발생시킨다', async () => {
    const input = 'abcdef';
    expect(() => InputValidator.checkIsInNameLengthRange(input)).toThrow(
      '[ERROR]',
    );
  });
  test('시도할 횟수가 숫자가 아니면 예외를 발생시킨다', async () => {
    const input = 'a';
    expect(() => InputValidator.checkIsNumber(input)).toThrow('[ERROR]');
  });
});
