import { Console } from '@woowacourse/mission-utils';

const getUserInput = async (prompt, checkValid) => {
  const inputValue = await Console.readLineAsync(prompt);
  const isValidInput = checkValid(inputValue);

  if (!isValidInput) {
    const errorMessage = '[ERROR] 올바른 입력이 아닙니다.';
    throw Error(errorMessage);
  }

  return inputValue;
};

export default getUserInput;
