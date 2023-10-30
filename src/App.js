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
    this.position ++;
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
      await this.startRace();
     } catch (error) {
      console.error(error.message);
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
    for (let i=0; i<this.rounds; i++) {
      this.moveCars();
    }
  }

  moveCars() {
    this.cars.forEach (car => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        car.move();
      }
    });
  }
}

export default App;
