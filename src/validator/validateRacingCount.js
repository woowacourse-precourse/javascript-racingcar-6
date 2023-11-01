import ErrorMessage from '../errors/ErrorMessage.js';
import { ERROR_MESSAGES } from '../constants/constants.js';

function checkNumber(userInput) {
  if (isNaN(userInput)) {
    throw new ErrorMessage(ERROR_MESSAGES.notNumber)
  }
}

function checkNaturalNumber(racingCount) {
  if (racingCount <= 0 || !(Number.isInteger(racingCount))) {
    throw new ErrorMessage(ERROR_MESSAGES.notNaturalNumber);
  }
}

/**
 * 입력 받은 경주 횟수가 자연수인지 구분하여, 문제가 있을 경우 에러를 발생시킨다.
 * 
 * @param {string} racingCountInput
 * @throws 사용자가 잘못된 값을 입력했을 경우 throw Error
 */
export default function validateRacingCount(racingCountInput) {
  checkNumber(racingCountInput);
  checkNaturalNumber(Number(racingCountInput));
}

// console.log(validateRacingCount("0"));
// console.log(validateRacingCount("0.1"));
// console.log(validateRacingCount("heelo"));
// console.log(validateRacingCount("1"));