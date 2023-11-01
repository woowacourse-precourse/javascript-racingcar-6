import { MissionUtils } from '@woowacourse/mission-utils';
import { isCarReadyToMove } from './validation.js';

function runRace(gameData) {
  MissionUtils.Console.print('\n실행 결과');
  let roofNum = gameData.getRoofNum();

  while (roofNum-- > 0) {
    gameData.getRacecarNames().forEach((data, i) => {
      moveCarAndPrintResult(data);
    });
    MissionUtils.Console.print('\n');
  }
}

function moveCarAndPrintResult(data) {
  if (isCarReadyToMove()) {
    data.count++;
  }
  MissionUtils.Console.print(`${data.name} : ${'-'.repeat(data.count)}`);
}

export { runRace };
