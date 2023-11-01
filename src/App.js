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
