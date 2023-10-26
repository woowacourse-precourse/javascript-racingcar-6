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

    return NUM_MOVES;
  }
}

export default App;
