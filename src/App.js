import { Console, Random } from '@woowacourse/mission-utils';

class App {
  //자동차 이름 초기화
  constructor() {
    this.carNames = [];
  }

  //게임 실행 함수
  async play() {
    this.userInputCarNames();
    const NUMBER_OF_MOVES = await this.userInputNumberOfMoves();
    this.startGame(NUMBER_OF_MOVES);
  }

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
  async userInputNumberOfMoves() {
    const INPUT = await Console.readLineAsync();
    const NUMBER_OF_MOVES = parent(INPUT);

    //예외처리
    if (NUMBER_OF_MOVES <= 0 || isNaN(NUMBER_OF_MOVES)) {
      throw new Error('[ERROR]');
    }

    return NUMBER_OF_MOVES;
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

  //게임 진행하는 로직
  startGame(numberOfMovees) {
    //게임을 numberOfMovees횟수만큼 반복해서 실행해야하기 때문에 for문 실행
    for (let moveNum = 0; moveNum < numberOfMovees; moveNum++) {
      const RESULT = this.resultByRandomNumber();
      for (const carName in RESULT) {
        const STATUS = RESULT[carName] ? '-' : '';
        Console.print(`${carName} : ${STATUS}`);
      }
    }
  }
}

export default App;
