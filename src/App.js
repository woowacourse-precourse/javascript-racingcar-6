// import { Console, Random } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  //자동차 이름 초기화
  constructor() {
    this.carNames = [];
  }

  //게임 실행 함수
  async play() {
    // this.userInputCarNames();
    const INPUT = await MissionUtils.Console.readLineAsync();
    // MissionUtils.Console.print(INPUT);
    const CAR_NAMES = INPUT.split(',');

    // 예외처리
    if (CAR_NAMES.length < 2 || CAR_NAMES.some(carName => carName.length > 5)) {
      throw new Error('[ERROR] 이름 오류');
    }

    this.carNames = CAR_NAMES;

    const NUMBER_OF_MOVES = await this.userInputNumberOfMoves();
    const RESULTS = [];
    // this.startGame(NUMBER_OF_MOVES);
    for (let moveNum = 0; moveNum < NUMBER_OF_MOVES; moveNum++) {
      const RESULT = this.resultByRandomNumber();
      RESULTS.push(RESULT);
      this.printProgress(RESULT);
    }

    const WINNERS = this.calculateWinner(RESULTS);
    this.printWinner(WINNERS);
  }

  //사용자가 입력한 자동차 이름 가져오기
  // async userInputCarNames() {
  //   const INPUT = await MissionUtils.Console.readLineAsync();
  //   MissionUtils.Console.print(INPUT);
  //   const CAR_NAMES = INPUT.split(',');

  //   // 예외처리
  //   if (CAR_NAMES.length < 2 || CAR_NAMES.some(carName => carName.length > 5)) {
  //     throw new Error('[ERROR] 이름 오류');
  //   }

  //   this.carNames = CAR_NAMES;
  // }

  //사용자가 입력한 자동차 이동 횟수 가져오기
  async userInputNumberOfMoves() {
    const INPUT = await MissionUtils.Console.readLineAsync();
    const NUMBER_OF_MOVES = parseInt(INPUT);

    //예외처리
    if (NUMBER_OF_MOVES <= 0 || isNaN(NUMBER_OF_MOVES)) {
      throw new Error('[ERROR] 횟수 오류');
    }

    return NUMBER_OF_MOVES;
  }

  //랜덤 숫자로 자동차 움직여서 결과 도출
  resultByRandomNumber() {
    const RESULT = {};
    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
    for (let index = 0; index < this.carNames.length; index++) {
      // 각 carNames의 value에 RANDOM_NUMBER가 4이상이면 true, 4이하면 false가 저장됨 -> true면 -, false면 공백 저장되도록 변경
      RESULT[this.carNames[index]] = RANDOM_NUMBER >= 4 ? '-' : '';
    }

    MissionUtils.Console.print(RESULT);
    return RESULT;
  }

  //진행상황 출력
  printProgress(result) {
    for (const carName in result) {
      const STATUS = result[carName] ? '-' : '';
      MissionUtils.Console.print(`${carName} : ${STATUS}`);
    }
  }

  // 우승자 출력
  printWinner(winners) {
    const WINNERS_NAME = winners.join(', ');
    MissionUtils.Console.print(`최종 우승자 : ${WINNERS_NAME}`);
  }

  // 우승자 계산
  calculateWinner(results) {
    const LAST_GAME_INDEX = results.length - 1;

    const MAX_POSITION = results.reduce((max, result) => {
      for (const carName in result) {
        max = Math.max(max, this.calculatePosition(carName, result));
      }
      return max;
    }, 0);

    let winners = [];
    for (const carName in results[LAST_GAME_INDEX]) {
      if (
        this.calculatePosition(carName, results[LAST_GAME_INDEX]) ===
        MAX_POSITION
      ) {
        winners.push(carName);
      }
    }

    return winners;
  }

  // 자동차 위치 계산
  calculatePosition(carName, result) {
    // MissionUtils.Console.print(result[carName]);
    return result[carName].split('-').length - 1;
  }
}

export default App;
