import AppError from '../../src/errors/AppError.js';
import {
  MOVE_COUNT_VALIDATION_TYPES,
  validateMoveCount,
} from '../../src/validations/moveCountValidation.js';

describe('validateMoveCount 테스트', () => {
  const startValidation = (moveCount) => () => validateMoveCount(moveCount);

  describe('예외 테스트', () => {
    test.each([
      {
        moveCount: NaN,
        expectedErrorMessage:
          MOVE_COUNT_VALIDATION_TYPES.checkTypeOfNumber.errorMessage,
      },
      {
        moveCount: -1,
        expectedErrorMessage:
          MOVE_COUNT_VALIDATION_TYPES.checkNaturalNumber.errorMessage,
      },
      {
        moveCount: 0,
        expectedErrorMessage:
          MOVE_COUNT_VALIDATION_TYPES.checkNaturalNumber.errorMessage,
      },
      {
        moveCount: 0.5,
        expectedErrorMessage:
          MOVE_COUNT_VALIDATION_TYPES.checkNaturalNumber.errorMessage,
      },
    ])(
      '입력된 이동 횟수가 $moveCount 일 때 "$expectedErrorMessage" 메시지와 함께 에러가 발생해야 한다.',
      ({ moveCount, expectedErrorMessage }) => {
        expect(startValidation(moveCount)).toThrow(
          new AppError(expectedErrorMessage),
        );
      },
    );
  });

  describe('비 예외 테스트', () => {
    test.each([
      {
        moveCount: 1,
      },
      {
        moveCount: 100_000,
      },
    ])(
      '입력된 이동 횟수가 $moveCount 일 때 에러가 발생하지 않는다.',
      ({ moveCount }) => {
        expect(startValidation(moveCount)).not.toThrow();
      },
    );
  });
});
