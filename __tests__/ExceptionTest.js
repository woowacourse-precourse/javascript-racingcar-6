import { checkCarNames, checkTryNumber } from '../src/Validation';
import { ERROR_MESSAGE } from '../src/Message';

describe('예외 테스트', () => {
  test.each(['', ' '])('자동차 이름을 공백 또는 입력하지 않았을 때', inputs => {
    expect(() => checkCarNames(inputs)).toThrow(ERROR_MESSAGE.NO_CAR_NAME);
  });

  test('자동차 이름을 쉼표만 입력했을 때', () => {
    expect(() => checkCarNames(',')).toThrow(ERROR_MESSAGE.NO_CAR_NAME);
  });

  test('자동차 이름이 5글자가 넘을 때', () => {
    expect(() => checkCarNames('pobi,javajigi')).toThrow(
      ERROR_MESSAGE.LENGTH_ERROR,
    );
  });

  test('자동차 이름이 중복되었을 때', () => {
    expect(() => checkCarNames('pobi,java,pobi')).toThrow(
      ERROR_MESSAGE.DUPLICATE_ERROR,
    );
  });

  test.each(['', ' '])('시도 횟수를 공백 또는 입력하지 않았을 때', inputs => {
    expect(() => checkTryNumber(inputs)).toThrow(ERROR_MESSAGE.NO_NUMBER);
  });

  test.each(['car', '자동차'])(
    '시도 횟수에 숫자를 입력하지 않았을 때',
    inputs => {
      expect(() => checkTryNumber(inputs)).toThrow(
        ERROR_MESSAGE.NOT_NUMBER_ERROR,
      );
    },
  );
});
