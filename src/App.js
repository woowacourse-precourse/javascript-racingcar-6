import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.validateName(name);
    this.name = name;
    this.position = 0;
  }

  validateName(name) {
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.")
    }
  }

  move() {
    this.position++;
  }
}

class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    MissionUtils.Console.print('자동차 경주 게임을 시작합니다!');

    try {
      await this.inputCarNames();
      await this.inputRounds();
      MissionUtils.Console.print('\n실행 결과');
      await this.startRace();
      this.printWinners();
    } catch (error) {
        console.error(error.message);
        throw error;
    }
  }

  async inputCarNames() {
    const names = await MissionUtils.Console.readLineAsync();
    this.cars = names.split(',').map(name => new Car(name));
  }

  async inputRounds() {
    this.rounds = await MissionUtils.Console.readLineAsync();
  }

  async startRace() {
    for (let i = 0; i < this.rounds; i++) {
      this.moveCars();
      this.printRaceResult();
    }
  }

  moveCars() {
    this.cars.forEach(car => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        car.move();
      }
    });
  }

  printRaceResult() {
    this.cars.forEach(car => {
      MissionUtils.Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    MissionUtils.Console.print('');
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    return this.cars.filter(car => car.position === maxPosition).map(car => car.name);
  }

  printWinners() {
    const winners = this.getWinners();
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export { Car, App as default };