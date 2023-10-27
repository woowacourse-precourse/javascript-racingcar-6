import errorList from '../error/errorCode.js';
import { gameErrorhandler } from '../error/errorhandler.js';

async function checkCarValid(input) {
  const primaryArray = input.split(',');

  try {
    const carLengthCheck = [...primaryArray].map((item) => item.length <= 5);

    const isNotValid = carLengthCheck.includes(false);

    if (isNotValid) {
      const errorKey = 'tooLongRacerName';
      const errorCode = errorList.get(errorKey);
      throw errorCode;
    }
    return primaryArray;
  } catch (error) {
    gameErrorhandler(error);
    return null;
  }
}

async function checkRaceCountValid(input) {
  try {
    const count = Number(input);
    const isCountZero = count === 0;
    const isCountNaN = Number.isNaN(count);

    if (isCountZero) {
      const errorCode = 'inputIsZero';
      throw errorCode;
    }

    if (isCountNaN) {
      const errorCode = 'inputIsNaN';
      throw errorCode;
    }
    console.log(count);
    return count;
  } catch (error) {
    gameErrorhandler(error);
    return null;
  }
}

export { checkCarValid, checkRaceCountValid };
