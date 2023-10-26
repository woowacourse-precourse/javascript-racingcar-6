import { Console, Random } from '@woowacourse/mission-utils';

class App {
  //자동차 이름 초기화
  constructor() {
    this.carNames = [];
  }

  async play() {}

  //사용자가 입력한 자동차 이름 가져오기
  async userInputCarNames() {
    const INPUT = await Console.readLineAsync();
    // Console.print(INPUT);
    const CAR_NAMES = INPUT.split(',');

    // 예외처리
    if (CAR_NAMES.length < 2 || CAR_NAMES.some(carName => carName.length > 5)) {
      throw new Error('[ERROR]');
    }

    this.carNames = CAR_NAMES;
  }

  //사용자가 입력한 자동차 이동 횟수 가져오기
  async userInputNumMoves() {
    const INPUT = await Console.readLineAsync();
    const NUM_MOVES = parent(INPUT);

    //예외처리
    if (NUM_MOVES <= 0 || isNaN(NUM_MOVES)) {
      throw new Error('[ERROR]');
    }

    return NUM_MOVES;
  }

  //랜덤 숫자로 자동차 움직여서 결과 도출
  resultByRandomNumber() {
    const RESULT = {};
    const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
    for (let index = 0; index < this.carNames.length; index++) {
      // 각 carNames의 value에 RANDOM_NUMBER가 4이상이면 true, 4이하면 false가 저장됨
      RESULT[this.carNames[index]] = RANDOM_NUMBER >= 4;
    }

    return RESULT;
  }
}

export default App;
