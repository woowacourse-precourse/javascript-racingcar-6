import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constant/constants';

const getUserInput = async (prompt, checkValid) => {
  const inputValue = await Console.readLineAsync(prompt);
  const isValidInput = checkValid(inputValue);

  if (!isValidInput) {
    throw Error(ERROR_MESSAGE.INVALID_INPUT);
  }

  return inputValue;
};

export default getUserInput;
