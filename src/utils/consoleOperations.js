import { Console } from '@woowacourse/mission-utils';

export const printMessage = (message) => {
  return Console.print(message);
}

export const readLineAsync = async (message) => {
  return Console.readLineAsync(message);
}