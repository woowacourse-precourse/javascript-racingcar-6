import { ERROR_MESSAGE } from '../constants/errorMessage.js';
import { LIMIT } from '../constants/racingRule.js';
import { CarNamesError, TryRoundError } from '../errors/UserInputErrors.js';
import { paramType } from './paramType.js';

export const validate = {
  carNames(userInput, _ = paramType(userInput, 'string')) {
    const COMMA = ',';
    const carNamesArray = userInput.split(',');
    const spaceRegExp = /\s/g;
    const invalidCarNameRegExp = /[^a-zA-Z가-힣0-9,]/g;
    const upperCaseFlattenArray = [...carNamesArray].map((carName) =>
      carName.toUpperCase()
    );

    if (!userInput.includes(`${COMMA}`)) {
      throw new CarNamesError(
        ERROR_MESSAGE.USER_INPUT.CAR_NAMES.NOT_HAVE_COMMA
      );
    }
    if (spaceRegExp.test(userInput)) {
      throw new CarNamesError(ERROR_MESSAGE.USER_INPUT.CAR_NAMES.HAVE_SPACING);
    }
    if (carNamesArray.length === 2 && userInput[userInput.length - 1] === ',') {
      throw new CarNamesError(
        ERROR_MESSAGE.USER_INPUT.CAR_NAMES.NOT_ENOUGH_PEOPLE
      );
    }
    if (
      !carNamesArray.every((carName) => carName.length >= LIMIT.NAME_LENGTH.MIN)
    ) {
      throw new CarNamesError(
        ERROR_MESSAGE.USER_INPUT.CAR_NAMES.NOT_ENOUGH_NAME_LENGTH
      );
    }
    if (
      !carNamesArray.every((carName) => carName.length <= LIMIT.NAME_LENGTH.MAX)
    ) {
      throw new CarNamesError(
        ERROR_MESSAGE.USER_INPUT.CAR_NAMES.OVER_NAME_LENGTH
      );
    }
    if (invalidCarNameRegExp.test(userInput)) {
      throw new CarNamesError(
        ERROR_MESSAGE.USER_INPUT.CAR_NAMES.INVALID_NAME_FORM
      );
    }
    if (carNamesArray.length > LIMIT.PERSONNEL) {
      throw new CarNamesError(
        ERROR_MESSAGE.USER_INPUT.CAR_NAMES.OVER_PERSONNEL
      );
    }
    if (new Set(carNamesArray).size !== carNamesArray.length) {
      throw new CarNamesError(
        ERROR_MESSAGE.USER_INPUT.CAR_NAMES.IS_DUPLICATE_NAME
      );
    }
    if (new Set(upperCaseFlattenArray).size !== carNamesArray.length) {
      throw new CarNamesError(
        ERROR_MESSAGE.USER_INPUT.CAR_NAMES.IS_UPPER_AND_LOWERCASE_DUPLICATE
      );
    }
  },
  tryRound(tryRound) {
    const spaceRegExp = /\s/g;
    const numberTryRound = Number(tryRound);
    const rangeExpReg = /^(100|[1-9][0-9]|[1-9])$/g;

    if (Number.isNaN(numberTryRound)) {
      throw new TryRoundError(
        ERROR_MESSAGE.USER_INPUT.TRY_ROUND.IS_NOT_NUMBER_TYPE
      );
    }
    if (spaceRegExp.test(tryRound)) {
      throw new TryRoundError(ERROR_MESSAGE.USER_INPUT.TRY_ROUND.HAVE_SPACING);
    }
    if (numberTryRound === 0) {
      throw new TryRoundError(
        ERROR_MESSAGE.USER_INPUT.TRY_ROUND.LACK_TRY_ROUND
      );
    }
    if (tryRound.length > 1 && tryRound[0] === '0') {
      throw new TryRoundError(
        ERROR_MESSAGE.USER_INPUT.TRY_ROUND.INCLUDE_FIRST_INDEX_ZERO
      );
    }
    if (tryRound[0] === '+' || tryRound[0] === '-') {
      throw new TryRoundError(
        ERROR_MESSAGE.USER_INPUT.TRY_ROUND.INCLUDE_MATH_SIGN
      );
    }
    if (!rangeExpReg.test(tryRound)) {
      throw new TryRoundError(
        ERROR_MESSAGE.USER_INPUT.TRY_ROUND.INVALID_TRY_ROUND_RANGE
      );
    }
  },
};
