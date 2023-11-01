### 미션 - 자동차 경주

**기능 요구 사항**

자동차에 이름 부여하기

- [X] 화면에 _"경주할 자동차 이름을 입력하세요. (이름은 쉼표( , ) 기준으로 구분)"_을 출력한다.
- [X] 자동차 이름은 5자 이하만 가능하다.
- [X] 자동차 이름은 쉼표(,)로 구분한다.
- [X] 자동차의 개수는 N개로 쉼표로 구분된다.
- [ ] 전진하는 자동차를 출력할 때, 설정한 자동차의 이름을 같이 출력한다.


자동차 이동 횟수 부여하기

- [X] 화면에 "시도할 횟수는 몇 회인가요?"를 출력한다.
- [ ] 자동차는 전진 또는 멈출 수 있다.
- [X] 주어진 횟수동안만 이동이 가능하다.
- [X] 사용자는 몇 번의 이동을 할 것인지 입력할 수 있어야 한다.
- [X] 전진 조건은 0에서 9 사이에서 구한 무작위 값이 4이상인 경우이다.
- [X] 0에서 9사이의 무작위 값을 구한다.
- [X] 무작위 값>= 4 인 경우 전진한다. (4, 5, 6, 7, 8, 9)
- [X] 무작위 값< 4 인 경우 전진하지 않는다. (0, 1, 2, 3)

자동차 게임 우승자 부여하기

- [X] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다.
- [X] 우승자는 한 명 이상이다.
- [X] 우승자가 여러 명일 경우 쉼표(,)로 구분한다.

사용자가 잘못된 값을 입력한 경우

- [X] throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨다.
- [ ] 예외를 발생시킨 후 애플리케이션을 종료시킨다.

  
  
const { Console, Random } = require('@woowacourse/mission-utils');

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const DISTANCE = Random.pickNumberInRange(0, 9);
    if (DISTANCE >= 4) {
      this.position += 1;
    }
  }
}

class RaceGame {
  constructor() {
    this.cars = [];
  }

  async play() {
    try {
      this.initializeGame();
      const NUM_MOVES = await this.getNumMovesFromUser();
      await this.runRace(NUM_MOVES);
      await this.printWinners();
    } catch (error) {
      await Console.printAsync(error.message + '\n');
    }
  }

  initializeGame() {
    const CAR_NAMES = Console.readLineAsync('경주할 자동차 이름을 경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const NAMES = CAR_NAMES.split(',');
    this.cars = NAMES.map(name => new Car(name));
  }

  async getNumMovesFromUser() {
    const NUM_MOVES = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    if (!/^\d+$/.test(NUM_MOVES)) {
      throw new Error('[ERROR] 이동횟수가 잘못된 형식입니다.');
    }
    return parseInt(NUM_MOVES);
  }

  async runRace(NUM_MOVES) {
    for (let MOVE = 0; MOVE < NUM_MOVES; MOVE++) {
      await Console.printAsync(`\nRace ${MOVE + 1}:\n`);
      for (const CAR of this.cars) {
        CAR.move();
        this.printCarStatus(CAR);
      }
      await this.sleep(1000);
    }
  }

  printCarStatus(CAR) {
    const TRACK = '-'.repeat(CAR.position);
    Console.printAsync(`${CAR.name}: ${TRACK}\n`);
  }

  async printWinners() {
    const MAX_POSITION = Math.max(...this.cars.map(CAR => CAR.position));
    const WINNERS = this.cars.filter(CAR => CAR.position === MAX_POSITION);

    if (WINNERS.length === 1) {
      await Console.printAsync(`최종 우승자: ${WINNERS[0].name}\n`);
    } else {
      const WINNER_NAMES = WINNERS.map(WINNER => WINNER.name).join(', ');
      await Console.printAsync(`최종 우승자: ${WINNER_NAMES}\n`);
    }
  }

  sleep(MS) {
    return new Promise(resolve => setTimeout(resolve, MS));
  }
}

module.exports = RaceGame;

