// import { MissionUtils } from '@woowacourse/mission-utils';
// import controller from './Controller/controller';

// class App {
//   constructor(){
//     this.controller = new controller();
//   }

//   play() {
//     this.controller.startGame();
//   }
// }

// const app = new App();
// app.play();

// export default App;

import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      this.position += 1;
    }
  }

  getDisplay() {
    return "-".repeat(this.position);
  }
}

class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    try {
      await this.inputCars();
      await this.inputAttempts();

      for (let attempt = 0; attempt < this.attempts; attempt++) {
        this.moveCars();
        this.printCarsStatus();
      }

      this.printWinners();
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw new Error(`[ERROR] ${error.message}`); // 에러를 다시 던져서 테스트가 정상적으로 처리될 수 있도록 함
    }
  }

  async inputCars() {
    const carNames = await MissionUtils.Console.readLineAsync();
    if (!carNames.includes(",")) {
      throw new Error("자동차 이름은 쉼표(,)로 구분되어야 합니다.");
    }

    this.cars = carNames.split(",").map((name) => {
      if (name.length > 5) {
        throw new Error("자동차 이름은 5자 이하여야 합니다.");
      }
      return new Car(name);
    });
  }

  async inputAttempts() {
    const attempts = await MissionUtils.Console.readLineAsync();
    const parsedAttempts = parseInt(attempts, 10);

    if (isNaN(parsedAttempts) || parsedAttempts <= 0) {
      throw new Error("시도 횟수는 양의 정수여야 합니다.");
    }

    this.attempts = parsedAttempts;
  }

  moveCars() {
    this.cars.forEach((car) => car.move());
  }

  printCarsStatus() {
    this.cars.forEach((car) => {
      const display = car.getDisplay();
      MissionUtils.Console.print(`${car.name} : ${display}`);
    });
    MissionUtils.Console.print("");
  }

  printWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position));
    const winners = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name)
      .join(", ");

    MissionUtils.Console.print(`최종 우승자 : ${winners}`);
  }
}

export default App;
