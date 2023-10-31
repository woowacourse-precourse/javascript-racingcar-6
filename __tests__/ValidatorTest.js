import InputValidator from '../src/domain/InputValidator.js';
import { MESSAGE } from '../src/constants/messages.js';

describe('InputValidator', () => {
  const invalidInputs = {
    carNames: ['아메리칸드림', ''],
    rounds: ['0', '-1', '', '10a', 'a10', 'abc', '!'],
  };

  test.each(invalidInputs.carNames)(
    '자동차 이름이 1글자 이상 5글자 이하인지 테스트한다.',
    (carName) => {
      expect(() => InputValidator.validateCarNames([carName])).toThrowError(MESSAGE.lengthName);
    }
  );

  test('중복되는 이름이 있는지 테스트한다.', () => {
    expect(() => InputValidator.validateCarNames(['자동차', '차', '자동차'])).toThrowError(
      MESSAGE.uniqueName
    );
  });

  test.each(invalidInputs.rounds)('시도할 횟수가 1이상인 숫자인지 테스트한다.', (round) => {
    expect(() => InputValidator.validateRound(round)).toThrowError(MESSAGE.minRound);
  });
});
