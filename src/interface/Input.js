import { Console } from '@woowacourse/mission-utils';

export const Input = async (placeholder) => {
  try {
    return await Console.readLineAsync(placeholder);
  } catch (e) {
    throw new Error(e);
  }
};
