import { Console } from '@woowacourse/mission-utils';

export const Input = async (placeholder) => {
  return await Console.readLineAsync(placeholder);
};
