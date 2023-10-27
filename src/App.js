import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carNames = [];
    this.carNameObjects = [];
    this.roundCount = 0;
  }

  async play() {
    await this.gameStart();
    this.gameProgress();
  }

  async gameStart() {
    await this.getCarNames();
    await this.getRoundCount();
  }

  gameProgress() {
    const carNameObjects = this.carNames.map((carName) => new Car(carName));

    Console.print("\n실행 결과");

    // round count 만큼 반복문을 돌면서 결과값을 출력
    for (let i = 0; i < this.roundCount; i++) {
      this.printCarNameStatus(carNameObjects);
      Console.print("\n");
    }

    // car name object 데이터를 전역적으로 사용할 수 있게 바꿈
    this.carNameObjects = carNameObjects;
  }

  printCarNameStatus(carNameObjects) {
    carNameObjects.map((car) => {
      car.checkPosition();

      const name = car.getCarName();
      const position = car.getCarPosition();

      Console.print(`${name} : ${"-".repeat(position)}`);
    });
  }

  async getCarNames() {
    const getCarNameInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.carNames = this.validateCarNameLength(getCarNameInput);
  }

  async getRoundCount() {
    const roundCountInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.roundCount = this.validateRoundCount(roundCountInput);
  }

  validateCarNameLength(carName) {
    const carNames = carName.split(",");

    return carNames.map((carName) => {
      if (carName.length > 5) {
        throw new Error("[ERROR] 자동차 이름의 길이가 5자리를 넘어갑니다.");
      }
      return carName;
    });
  }

  validateRoundCount(roundCount) {
    if (isNaN(roundCount)) {
      throw new Error("[ERROR] 숫자 형식이 아닙니다.");
    }

    if (roundCount.includes("-")) {
      throw new Error("[ERROR] 음수가 들어갈 수 없습니다.");
    }

    return roundCount;
  }
}

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  getCarName() {
    return this.name;
  }

  getCarPosition() {
    return this.position;
  }

  checkPosition() {
    const randomString = Random.pickNumberInRange(0, 9);
    if (randomString >= 4) {
      this.position += 1;
    }
  }
}

export default App;
