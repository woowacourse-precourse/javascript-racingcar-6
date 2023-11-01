import { Console, Random } from '@woowacourse/mission-utils';
import { RULES } from '../constants';

export const printMessage = message => {
  Console.print(message);
};

export const readLinePrompt = async message => {
  try {
    return Console.readLineAsync(message);
  } catch (error) {
    Console.print(`[ERROR] ${error.message}`);
    return error;
  }
};

export const goOneStep = () => {
  return Random.pickNumberInRange(0, 9) >= RULES.goMinStandardNumber;
};
