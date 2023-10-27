import { Console } from '@woowacourse/mission-utils';

const printMessage = (message) => {
  return Console.print(message);
}

const readLineAsync = async (message) => {
  return Console.readLineAsync(message);
}

export { printMessage, readLineAsync };