import { Console } from '@woowacourse/mission-utils';

export const printMessage = message => {
  Console.print(message);
};

export const readLinePrompt = async message => {
  try {
    return Console.readLineAsync(message);
  } catch (error) {
    Console.print(`[ERROR] ${error.message}`);
  }
};
