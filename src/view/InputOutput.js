import { Console } from '@woowacourse/mission-utils';

export const getUserInputAndValidate = async (text, validateFunc) => {
  const userInput = await Console.readLineAsync(text);
  validateFunc(userInput);

  return userInput;
};

export const printResult = (leftText, rightText) => {
  Console.print(`${leftText} : ${rightText}`);
};
