import { Console } from '@woowacourse/mission-utils';
import { SETTING, ERROR_MESSAGE } from './constants';

const printMessage = (message) => {
  return Console.print(message);
}

const readLineAsync = async (message) => {
  return Console.readLineAsync(message);
}

const isValidInputNames = (input) => {
  input = input.trim();
  const splittedInput = input.split(',');

  const set = new Set(splittedInput);
  const { MIN_NAME_NUMBER, MIN_NAME_LENGTH, MAX_NAME_LENGTH } = SETTING;
  const { NOT_MULTIPLE_NAMES, NOT_NAME_LENGTH, NOT_UNIQUE } = ERROR_MESSAGE;
  
  if (splittedInput.length < MIN_NAME_NUMBER) {
    throw new Error(`${NOT_MULTIPLE_NAMES}`);
  } 

  if (splittedInput
      .filter(name => name.length < MIN_NAME_LENGTH || name.length > MAX_NAME_LENGTH)
      .length > 0) {
    throw new Error(`${NOT_NAME_LENGTH}`);
  }

  if (set.size !== splittedInput.length) {
    throw new Error(`${NOT_UNIQUE}`);
  }

  return true;
}

export { printMessage, readLineAsync, isValidInputNames };