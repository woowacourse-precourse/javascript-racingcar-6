import errorList from '../error/errorCode.js';

function checkCarValid(input) {
  const primaryArray = input.split(',');

  const carLengthCheck = [...primaryArray].map((item) => item.length <= 5);

  const isNotValid = carLengthCheck.includes(false);

  if (isNotValid) {
    const errorKey = 'tooLongRacerName';
    const errorCode = errorList.get(errorKey);
    throw errorCode;
  } else {
    return primaryArray;
  }
}

function checkRaceCountValid(input) {
  const isNotValid = input !== '0';

  if (isNotValid) {
    const errorKey = 'inputIsZero';
    const errorCode = errorList.get(errorKey);
    throw errorCode;
  } else {
    return input;
  }
}

export { checkCarValid, checkRaceCountValid };
