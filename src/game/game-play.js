import { MissionUtils } from "@woowacourse/mission-utils";

export default class GamePlay { 
  // 자동차 게임 진행 메서드
  static moveCarGame(carNameArr, gameBoard) {
    const gameLen = gameBoard.length;
    for (let idx = 0; idx < gameLen; idx++) {
      if (this.isMove()) gameBoard[idx] += 1;
      MissionUtils.Console.print(`${carNameArr[idx]} : ${this.createGameBoard(gameBoard[idx])}`);      
    }
    MissionUtils.Console.print('\n');
    return gameBoard;
  }

  // 랜덤 수를 입력받아 앞으로 가는지 아닌지 결정하는 메서드.
  static isMove() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum >= 4 ? true : false;
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
