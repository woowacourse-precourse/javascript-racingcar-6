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

    carArr.forEach((carInfo) => {
      let progressStat = '';
      progressStat += PROGRESS_BAR.repeat(carInfo.moveCnt);

      MissionUtils.Console.print(`${carInfo.name} : ${progressStat}`);
    });
    MissionUtils.Console.print('\n');
  }
  winnerSelectFromMoveCnt(carArr);
};

export default RacingGame;
