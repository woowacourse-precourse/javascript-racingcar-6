import { gameErrorhandler } from '../error/errorhandler.js';

export async function checkCarNameValid(input) {
  const primaryArray = input.split(',');

  try {
    const lengthCheck = [...primaryArray].map((item) => item.length <= 5 && item.length > 0);
    const duplicateCheck = new Set([...primaryArray]);

    const isLenghtNotValid = lengthCheck.includes(false);
    const isDuplicateNotValid = primaryArray.length !== duplicateCheck.size;

    const isNotValid = isLenghtNotValid || isDuplicateNotValid;

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
