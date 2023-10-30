import racingGameValidationMethods from '../src/game/game.error';

describe('문자열 테스트', () => {
  test('split 메서드로 주어진 값을 구분', () => {
    const input = '1,2';
    const result = input.split(',');

    expect(result).toContain('2', '1');
    expect(result).toContainEqual('1', '2');
  });

  test('split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환', () => {
    const input = '1';
    const result = input.split(',');

    expect(result).toContain('1');
  });

  test('substring 메서드로 특정 구간 값을 반환', () => {
    const input = '(1,2)';
    const result = input.substring(1, 4);

    expect(result).toEqual('1,2');
  });

  test('at 메서드로 특정 위치의 문자 찾기', () => {
    const input = 'abc';
    const result = input.at(0);

    expect(result).toEqual('a');
  });

  test('validLength 메서드 : min, max 범위에 포함되는 길이의 문자열인지 검사', () => {
    const MIN_LENGTH = 1;
    const MAX_LENGTH = 5;
    const passInput = ['hello', 'a', 'abc'];
    const nonPassInput = ['', 'abcdef'];

    passInput.forEach((text) =>
      expect(
        racingGameValidationMethods.validLength(text, MIN_LENGTH, MAX_LENGTH),
      ).toBe(true),
    );
    nonPassInput.forEach((text) =>
      expect(
        racingGameValidationMethods.validLength(text, MIN_LENGTH, MAX_LENGTH),
      ).toBe(false),
    );
  });
});
