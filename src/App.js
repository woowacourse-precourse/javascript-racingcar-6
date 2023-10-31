import { MissionUtils } from "@woowacourse/mission-utils";
import { CarName, PlayNumber } from './input/index.js';


class App {
  async play() {
    // 자동차 이름 입력
    const carName = await CarName.inputCarName();
    CarName.validateCarName(carName);  // 차 이름에 대한 유효성 검사.

    // 게임 진행 횟수 입력
    const playNumber = await PlayNumber.inputPlayNumber();
    PlayNumber.validatePlayNumber(playNumber); // 게임 진행 횟수에 대한 유효성 검사.
    
    // // 자동차 이름을 배열로 만든 객체
    // const carNameArr = carName.split(",");
    
    // // 게임 진행과정을 저장할 객체
    // let gameBoard = this.createGameArr(carNameArr.length);
    
    // // 게임 시작
    // MissionUtils.Console.print(`${PRINT_START_GAME}`);
    // for (let idx = 0; idx < Number(playNumber); idx++){
    //   gameBoard = this.moveCarGame(carNameArr, gameBoard);
    // }

    // // 우승자 출력
    // this.resultGame(gameBoard, carNameArr);

  }


  // 진행과정을 저장할 객체 만드는 메서드.
  createGameArr(arrLen) {
    const arr = [];
    for (let idx = 0; idx < arrLen; idx++){
      arr[idx] = 0;
    }
    return arr;
  }


  // 자동차 게임 진행 메서드
  moveCarGame(carNameArr, gameBoard) {
    const gameLen = gameBoard.length;
    for (let idx = 0; idx < gameLen; idx++) {
      if (this.isMove()) gameBoard[idx] += 1;
      MissionUtils.Console.print(`${carNameArr[idx]}` + " : " + this.createGameBoard(gameBoard[idx]));      
    }
    MissionUtils.Console.print('\n');
    return gameBoard;
  }

  // 랜덤 수를 입력받아 앞으로 가는지 아닌지 결정하는 메서드.
  isMove() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNum >= 4 ? true : false;
  }

  // 게임 진행결과에따라 하이폰 개수 누적해가는 함수.
  createGameBoard(num) {
    let hyphen = '';
    for (let idx = 0; idx < num; idx++){
      hyphen += '-';
    }
    return hyphen;
  }


  // 우승자 발표 메서드
  resultGame(gameResult, carNameArr) {
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
    MissionUtils.Console.print(`${PRINT_RESULT}${bestPlayerName.join(', ')}`);
  }

}

export default App;

