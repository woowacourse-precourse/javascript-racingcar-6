import { MissionUtils } from "@woowacourse/mission-utils";
import { inputPrintConstants } from '../utils/index.js'

export default class ResultGame {
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

    return (`${inputPrintConstants.PRINT_RESULT}${bestPlayerName.join(', ')}`);

  }
}