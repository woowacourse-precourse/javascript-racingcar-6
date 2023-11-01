// 모듈 불러오기.
import { MissionUtils } from "@woowacourse/mission-utils";
import { CarName, PlayNumber } from './input/index.js';
import { inputPrintConstants } from './utils/index.js'
import { GamePlay, ResultGame }from './game/index.js'


class App {
  async play() {
    // 자동차 이름 입력
    const carName = await CarName.inputCarName();
    CarName.validateCarName(carName);  // 차 이름에 대한 유효성 검사.

    // 게임 진행 횟수 입력
    const playNumber = await PlayNumber.inputPlayNumber();
    PlayNumber.validatePlayNumber(playNumber); // 게임 진행 횟수에 대한 유효성 검사.
    
    // 자동차 이름을 배열로 만든 객체
    const carNameArr = carName.split(",");
    
    // 게임 진행과정을 저장할 객체
    let gameBoard = this.createGameArr(carNameArr.length);
    
    // 게임 시작
    MissionUtils.Console.print(inputPrintConstants.PRINT_START_GAME);
    for (let idx = 0; idx < Number(playNumber); idx++){
      gameBoard = GamePlay.moveCarGame(carNameArr, gameBoard);
    }

    // 우승자 확인 및 출력.
    ResultGame.rankAndResult(gameBoard, carNameArr);
  }

  // 진행과정을 저장할 객체 만드는 메서드.
  createGameArr(arrLen) {
    const arr = [];
    for (let idx = 0; idx < arrLen; idx++){
      arr[idx] = 0;
    }
    return arr;
  }
}

export default App;

