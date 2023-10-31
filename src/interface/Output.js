import { Console } from '@woowacourse/mission-utils';

export const Output = async (output) => {
  try {
    return await Console.print(output);
  } catch (e) {
    throw new Error(e);
  }
};
