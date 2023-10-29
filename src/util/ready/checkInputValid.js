import { gameErrorhandler } from '../error/errorhandler.js';

export async function checkCarNameValid(input) {
  const primaryArray = input.split(',');

  try {
    const carNameCheck = [...primaryArray].map((item) => item.length <= 5 && item.length > 0);

    const isNotValid = carNameCheck.includes(false);

    if (isNotValid) {
      const errorKey = 'tooLongRacerName';
      throw errorKey;
    }
    return primaryArray;
  } catch (error) {
    const promise = gameErrorhandler(error);
    return promise;
  }
}

export async function checkRaceCountValid(input) {
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
    return count;
  } catch (error) {
    const promise = gameErrorhandler(error);
    return promise;
  }
}
