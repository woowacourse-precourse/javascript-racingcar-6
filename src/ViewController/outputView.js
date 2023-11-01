import { MissionUtils } from '@woowacourse/mission-utils';

export const outputView = {
  printLine(message) {
    MissionUtils.Console.print(message);
  },

  divideLine() {
    MissionUtils.Console.print('');
  },
};
