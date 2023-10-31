import { Console } from '@woowacourse/mission-utils';

const InputView = async (message) => {
  const userInput = await Console.readLineAsync(message);
  return userInput || '';
};

export default InputView;
