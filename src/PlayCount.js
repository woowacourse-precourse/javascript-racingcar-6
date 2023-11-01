/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */

import { MissionUtils } from '@woowacourse/mission-utils';

class PlayCount {
  async getPlayCount() {
    let playCount;
    try {
      playCount =
        await MissionUtils.Console.readLineAsync(
          '시도할 횟수는 몇 회인가요?\n',
        );
      const isValidCount = this.validatePlayCount(playCount);
      if (!isValidCount) {
        return;
      }
      // eslint-disable-next-line consistent-return
      return isValidCount;
    } catch (err) {
      throw new Error(err);
    }
  }

  // 입력 후 유효성 검사 - 숫자 형태 확인
  validatePlayCount(playCount) {
    // eslint-disable-next-line no-restricted-globals
    const isNumber = isNaN(playCount);
    if (isNumber !== false) {
      throw new Error('[ERROR] 숫자의 형태로 입력하세요.');
    }
    return playCount;
  }
}

export default PlayCount;
