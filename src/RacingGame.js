import { MissionUtils } from '@woowacourse/mission-utils';
import { calculateMoveCntFromRandomNumber } from './utils.js';

const PROGRESS_BAR = '-';

const RacingGame = (carArr, tryNum) => {
  while (tryNum--) {
    calculateMoveCntFromRandomNumber(carArr);
    for (let i = 0; i < carArr.length; i++) {
      let progressStat = '';
      for (let j = 0; j < carArr[i].moveCnt; j++) {
        progressStat += PROGRESS_BAR;
      }
      MissionUtils.Console.print(`${carArr[i].name} : ${progressStat}`);
    }
    MissionUtils.Console.print('\n');
  }
};

export default RacingGame;
