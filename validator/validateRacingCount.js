import ErrorMessage from '../errors/ErrorMessage.js';

/**
 * 입력 받은 경주 횟수가 자연수인지 구분하여, 문제가 있을 경우 에러를 발생시킨다.
 * 
 * @param {Promise<string>} racingCountInput
 * @throws 사용자가 잘못된 값을 입력했을 경우 throw Error
 */
export default function validateRacingCount(racingCountInput) {
  const racingCount = Number(racingCountInput);
  
  if (racingCount <= 0 || !(Number.isInteger(racingCount))) {
    throw new ErrorMessage('경주 횟수는 자연수만 입력해야 합니다.');
  }
}

// console.log(validateRacingCount("0"));
// console.log(validateRacingCount("0.1"));
// console.log(validateRacingCount("heelo"));
// console.log(validateRacingCount("1"));