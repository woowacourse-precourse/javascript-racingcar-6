// 테스트를 위해 조금 변형한 함수.
import { MissionUtils } from "@woowacourse/mission-utils";

export default class GamePlay { 
  // 자동차 게임 진행 메서드
  static moveCarGame(carNameArr, gameBoard, boolean) {
    const gameLen = gameBoard.length;
    for (let idx = 0; idx < gameLen; idx++) {
      if (boolean[idx]) gameBoard[idx] += 1;
      MissionUtils.Console.print(`${carNameArr[idx]} : ${this.createGameBoard(gameBoard[idx])}`);      
    }
    MissionUtils.Console.print('\n');
    return gameBoard;
  }

  // 게임 진행결과에따라 하이폰 개수 누적해가는 함수.
  static createGameBoard(num) {
    let hyphen = '';
    for (let idx = 0; idx < num; idx++){
      hyphen += '-';
    }
    return hyphen;
  }
}
