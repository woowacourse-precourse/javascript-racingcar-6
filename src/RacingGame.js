import { MissionUtils } from '@woowacourse/mission-utils';
import {
  calculateMoveCntFromRandomNumber,
  winnerSelectFromMoveCnt,
} from './utils.js';

const PROGRESS_BAR = '-';

const RacingGame = (carArr, tryNum) => {
  MissionUtils.Console.print('\n실행결과');
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
  winnerSelectFromMoveCnt(carArr);
};

export default RacingGame;
