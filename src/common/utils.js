import { Console, Random } from '@woowacourse/mission-utils';

export const printMessage = (message) => Console.print(message);

export const throwError = (message, condition = true) => {
  if (condition) throw new Error(message);
};

export const generateRandomNumber = (min, max) => Random.pickNumberInRange(min, max);
