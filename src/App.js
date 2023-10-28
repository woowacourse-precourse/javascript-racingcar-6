import { MissionUtils } from "@woowacourse/mission-utils";


// 입력값 질문 상수
const INPUT_CAR_NAME = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
const INPUT_TRY_NUMBER = '시도할 횟수는 몇 회인가요?\n';

// 에러 상수
const WRONG_NAME_ERROR = '[ERROR] 이름 규칙에 알맞지 않은 문자가 포함되어 있습니다.';
const EMPTY_NAME_ERROR = '[ERROR] 이름이 빈 공간입니다.';
const NAME_LENGTH_ERROR = '[ERROR] 이름은 한글자 이상 다섯글자 이하로만 작성해주세요.';
const DIFFERENT_LANGUAGE_ERROR = '[ERROR] 언어를 한가지로 통일해 주세요.';
const SAME_NAME_ERROR = '[ERROR] 중복된 이름은 사용하지 말아주세요.';


// 유효성 검사 정규표현식
const regFirstForm = /^[가-힣a-zA-Z]{1}[가-힣a-zA-Z,]{1,}[가-힣a-zA-Z]{1}$/;
const regNameLen = /^[가-힣a-zA-Z]{1,5}$/;
const regLanguage = /^[가-힣]{1,}$|^[a-z]{1,}$|^[A-Z]{1,}$/;

class App {
  async play() {
    // 자동차 이름 입력
    const carName = await this.inputCarName();
    this.validateCarName(carName);
    // 게임 진행 횟수 입력
    let playNumber = await this.inputPlayNumber();
    this.validatePlayNumber(playNumber);
    
    MissionUtils.Console.print('\n실행 결과');

    // 자동차 이름을 배열로 만든 객체
    const carNameArr = carName.split(",");

    // 진행과정을 저장할 객체 만드는 메서드.
    let gameBoard = this.createGameArr(carNameArr.length);

    // 게임 시작
    for (let idx = 0; idx < Number(playNumber); idx++){
      gameBoard = this.moveCarGame(carNameArr, gameBoard);
    }

    // 우승자 출력
    this.resultGame(gameBoard, carNameArr);

  }
  

  
  // 차 이름 입력받는 메서드
  async inputCarName() {
    const carName = await MissionUtils.Console.readLineAsync(`${INPUT_CAR_NAME}`);
    return carName;
  }

  // inputCarName에 대한 유효성 검사
  validateCarName(name) {
    if (!regFirstForm.test(name)) throw new Error(`${WRONG_NAME_ERROR}`);

    const nameSplitArr = name.split(",");
    const nameSplitArrLen = nameSplitArr.length;
    let beforeName = '';
    for (let idx = 0; idx < nameSplitArrLen; idx++){
      if (!nameSplitArr[idx]) throw new Error(`${EMPTY_NAME_ERROR}`);
      if (!regNameLen.test(nameSplitArr[idx])) throw new Error(`${NAME_LENGTH_ERROR}`);
      if (!regLanguage.test(nameSplitArr[idx])) throw new Error(`${DIFFERENT_LANGUAGE_ERROR}`);
      if (beforeName === nameSplitArr[idx]) throw new Error(`${SAME_NAME_ERROR}`);
      beforeName = nameSplitArr[idx];
    }


  }

  async inputPlayNumber() {
    const playNumber = await MissionUtils.Console.readLineAsync(`${INPUT_TRY_NUMBER}`);
    return playNumber;
  }

  validatePlayNumber(number) {
    if (isNaN(number)) throw new Error('[ERROR] 숫자만 입력가능합니다.');
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
    
    // 최대스코어 가진 사람들 인덱스 찾는 메서드
    bestPlayerIdx = gameResult.map((score, idx) => {
      return score === max ? idx : null;
    })
    bestPlayerIdx = bestPlayerIdx.filter((el) => el !== null);

    // 최대스코어 가진 사람들.
    const bestPlayerName = bestPlayerIdx.map((nameIdx) => {
      return carNameArr[nameIdx];
    })

    // 마지막 우승자 출력!
    MissionUtils.Console.print('최종 우승자 : ' + `${bestPlayerName.join(', ')}`);
  }

}







export default App;
