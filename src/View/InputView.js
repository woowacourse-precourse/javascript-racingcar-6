import { Console } from '@woowacourse/mission-utils';

export const InputView = {
  async inputLine(message) {
    return await Console.readLineAsync(message);
  },
};
