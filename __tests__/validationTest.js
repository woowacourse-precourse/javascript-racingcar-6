import racingGameValidationMethods from '../src/game/game.error';

const { validDuplication, validLength } = racingGameValidationMethods;

test('validLength 메서드 : min, max 범위에 포함되는 길이의 문자열인지 검사', () => {
  const MIN_LENGTH = 1;
  const MAX_LENGTH = 5;
  const passInput = ['hello', 'a', 'abc'];
  const nonPassInput = ['', 'abcdef'];

  passInput.forEach((text) =>
    expect(validLength(text, MIN_LENGTH, MAX_LENGTH)).toBe(true),
  );
  nonPassInput.forEach((text) =>
    expect(validLength(text, MIN_LENGTH, MAX_LENGTH)).toBe(false),
  );
});

test('validDuplication : 배열 안에 중복된 아이템이 존재하는지 검사', () => {
  const passInput = ['a', 'b', 'c'];
  const nonPassInput = ['a', 'a', 'b'];

  expect(validDuplication(passInput)).toBe(true);
  expect(validDuplication(nonPassInput)).toBe(false);
});
