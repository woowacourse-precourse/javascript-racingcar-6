import { MissionUtils } from "@woowacourse/mission-utils";
import { inputPrintConstants } from '../utils/input-print.js'

export default class resultGame {
  // 우승자 발표 메서드
  static rankAndResult(gameResult, carNameArr) {
    const max = Math.max(...gameResult); // 최대스코어 점수
    let bestPlayerIdx = []; // 최대 스코어 가진 사람들 인덱스 배열
    
    // 최대스코어 가진 사람들의 인덱스 찾는 메서드
    bestPlayerIdx = gameResult.map((score, idx) => {
      return score === max ? idx : null;
    })
    bestPlayerIdx = bestPlayerIdx.filter((el) => el !== null);

    // 최대스코어 가진 사람들.
    const bestPlayerName = bestPlayerIdx.map((nameIdx) => {
      return carNameArr[nameIdx];
    })

    // 마지막 우승자 출력!
    MissionUtils.Console.print(`${inputPrintConstants.PRINT_RESULT}${bestPlayerName.join(', ')}`);

  }
}