import { gameErrorhandler } from '../error/errorhandler.js';

async function checkCarValid(input) {
  const primaryArray = input.split(',');

  try {
    const carNameCheck = [...primaryArray].map((item) => item.length <= 5);

    const isNotValid = carNameCheck.includes(false);

    if (isNotValid) {
      const errorKey = 'tooLongRacerName';
      throw errorKey;
    }
    return primaryArray;
  } catch (error) {
    gameErrorhandler(error);
    throw error;
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
    return count;
  } catch (error) {
    gameErrorhandler(error);
    return null;
  }
}

export { checkCarValid, checkRaceCountValid };
