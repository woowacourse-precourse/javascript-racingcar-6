import { MissionUtils } from '@woowacourse/mission-utils';

export const inputView = {
  /**
   *
   * @param { string } message
   * @returns { string }
   */
  async readLine(message) {
    return MissionUtils.Console.readLineAsync(message);
  },
};
