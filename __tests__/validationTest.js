import racingGameValidationMethods from '../src/game/game.error';

const { checkUniqueElement, checkLengthInRange, validateMoveCount } =
  racingGameValidationMethods;

describe('자동차 이름 입력 유효성 검사', () => {
  test('checkLengthInRange 메서드 : min, max 범위에 포함되는 길이의 문자열인지 검사', () => {
    const MIN_LENGTH = 1;
    const MAX_LENGTH = 5;
    const passInput = ['hello', 'a', 'abc'];
    const nonPassInput = ['', 'abcdef'];

    passInput.forEach((text) =>
      expect(checkLengthInRange(text, MIN_LENGTH, MAX_LENGTH)).toBe(true),
    );
    nonPassInput.forEach((text) =>
      expect(checkLengthInRange(text, MIN_LENGTH, MAX_LENGTH)).toBe(false),
    );
  });

  test('checkUniqueElement : 배열 안에 중복된 아이템이 존재하는지 검사', () => {
    const passInput = ['a', 'b', 'c'];
    const nonPassInput = ['a', 'a', 'b'];

    expect(checkUniqueElement(passInput)).toBe(true);
    expect(checkUniqueElement(nonPassInput)).toBe(false);
  });
});

test('시도할 횟수 입력에 대한 유효성 검사 메서드가 의도대로 동작하는지', () => {
  const inputs = ['', 'abc', '-1'];

  inputs.forEach((input) =>
    expect(() => validateMoveCount(input)).toThrow('[ERROR]'),
  );
});
