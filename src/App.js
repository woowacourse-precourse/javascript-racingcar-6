import { MissionUtils } from "@woowacourse/mission-utils";

const { Random, Console } = MissionUtils;

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= 4) this.position++;
  }

  toString() {
    return `${this.name} : ${"-".repeat(this.position)}`;
  }
}

class App {
  constructor() {
    this.cars = [];
    this.chances = 0;
  }

  async play() {
    this.getCars();
    this.getChances();
  }

  getCars() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const input = Console.readLineAsync();
    this.cars = input.split(",").map((name) => new Car(name));
  }

  getChances() {
    Console.print("시도할 횟수는 몇 회인가요?");
    this.chances = parseInt(Console.readLineAsync());
  }
}

export default App;
