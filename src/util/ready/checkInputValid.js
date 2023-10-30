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

    let errorCode = '';

    if (isNameTooLong) {
      errorCode = 'tooLongRacerName';
    }

    if (isNoName) {
      errorCode = 'noRacerName';
    }

    if (isHasDuplicateName) {
      errorCode = 'hasDuplicateName';
    }

    if (errorCode !== '') {
      throw errorCode;
    }

    return primaryArray;
  } catch (error) {
    const ERROR = occuredErrorhandler(error);
    throw ERROR;
  }
}

export async function checkRaceCountValid(input) {
  try {
    const count = Number(input);
    const isInputEmpty = input === '';
    const isCountZero = input !== '' && count === 0;
    const isCountNaN = Number.isNaN(count);

    let errorCode = '';

    if (isInputEmpty) {
      errorCode = 'inputIsEmpty';
    }

    if (isCountZero) {
      errorCode = 'inputIsZero';
    }

    if (isCountNaN) {
      errorCode = 'inputIsNaN';
    }

    if (errorCode !== '') {
      throw errorCode;
    }

    return count;
  } catch (error) {
    const ERROR = occuredErrorhandler(error);
    throw ERROR;
  }
}
