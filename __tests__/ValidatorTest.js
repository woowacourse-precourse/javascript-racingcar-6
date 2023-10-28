import InputValidator from '../src/domain/InputValidator';

describe('InputValidator', () => {
  const invalidInputs = {
    carNames: ['아메리칸드림', ''],
    rounds: ['0', '-1', '', '10a', 'a10', 'abc', '!'],
  };

  test.each(invalidInputs.carNames)(
    '자동차 이름이 1글자 이상 5글자 이하인지 테스트한다.',
    (carName) => {
      expect(() => InputValidator.hasValidCarNames([carName])).toThrowError(
        '[ERROR] 이름은 1글자 이상 5자 이하여야 합니다.'
      );
    }
  );

  test('중복되는 이름이 있는지 테스트한다.', () => {
    expect(() => InputValidator.hasValidCarNames(['자동차', '슈퍼카', '자동차'])).toThrowError(
      '[ERROR] 중복되는 이름이 존재합니다.'
    );
  });

  test.each(invalidInputs.rounds)('시도할 횟수가 1이상인 숫자인지 테스트한다.', (round) => {
    expect(() => InputValidator.hasValidRound(round)).toThrowError(
      '[ERROR] 최소 1이상의 숫자여야 합니다.'
    );
  });
});
