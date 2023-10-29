import { occuredErrorhandler } from '../error/errorhandler.js';

export async function checkCarNameValid(input) {
  const primaryArray = input.split(',');

  try {
    const tooLongNameCheck = [...primaryArray].map((item) => item.length <= 5);
    const noNameCheck = [...primaryArray].map((item) => item.length !== 0);
    const duplicateCheck = new Set([...primaryArray]);

    const isNameTooLong = tooLongNameCheck.includes(false);
    const isNoName = noNameCheck.includes(false);
    const isHasDuplicateName = primaryArray.length !== duplicateCheck.size;

    if (isNameTooLong) {
      const errorKey = 'tooLongRacerName';
      throw errorKey;
    }

    if (isNoName) {
      const errorKey = 'noRacerName';
      throw errorKey;
    }

    if (isHasDuplicateName) {
      const errorKey = 'hasDuplicateName';
      throw errorKey;
    }

    return primaryArray;
  } catch (error) {
    const promise = occuredErrorhandler(error);
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
    const promise = occuredErrorhandler(error);
    return promise;
  }
}
