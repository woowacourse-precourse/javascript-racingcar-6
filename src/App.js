import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.cars = [];
    this.gameCount = 0;
  }

  addCars() {
    this.cars = this.cars.map((name) => ({ name, score: 0 }));
  }

  isValid(carName) {
    if (carName.trim() === "" || carName.length > 5) {
      return false;
    }
    return true;
  }

  isDupCarNames() {
    const nameSet = new Set();
    for (const carName of this.cars) {
      if (nameSet.has(carName)) {
        return true;
      }
      nameSet.add(carName);
    }
    return false;
  }

  checkCarNames() {
    let carName;
    for (carName of this.cars) {
      if (this.isValid(carName) === false) {
        throw new Error("[ERROR]: invalid carName");
      }
    }
    if (this.isDupCarNames() === true) {
      throw new Error("[ERROR]: duplicate carName");
    }
  }

  checkNumber(input) {
    const numericRegex = /^[0-9]+$/;
    if (numericRegex.test(input) === false)
      throw new Error("[ERROR]: invalid number");
  }

  rollDice() {
    return Random.pickNumberInRange(0, 9);
  }

  printRoundResult() {
    let carInfo;
    let scoreLine;
    for (carInfo of this.cars) {
      scoreLine = "-".repeat(carInfo.score);
      Console.print(`${carInfo.name} : ${scoreLine}`);
    }
    Console.print("");
  }

  playOneRound() {
    let carInfo, score;
    for (carInfo of this.cars) {
      score = this.rollDice();
      if (score >= 4) {
        carInfo.score += score;
      }
    }
    this.printRoundResult();
  }

  startRacing() {
    Console.print("");
    Console.print("실행 결과");
    for (let i = 0; i < this.gameCount; ++i) {
      this.playOneRound();
    }
  }

  printWinner() {
    const winner = [];
    let highScore = -1;
    let carInfo;
    for (carInfo of this.cars) {
      if (carInfo.score > highScore) {
        highScore = carInfo.score;
      }
    }
    for (carInfo of this.cars) {
      if (highScore === carInfo.score) {
        winner.push(carInfo.name);
      }
    }
    if (winner.length === 1) {
      Console.print(`최종 우승자 : ${winner}`);
    }
    if (winner.length > 1) {
      Console.print(`최종 우승자 : ${winner.join(", ")}`);
    }
  }

  async play() {
    const inputCarNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    this.cars = inputCarNames.split(",");
    this.checkCarNames();
    this.addCars();
    const inputNumber = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );
    this.checkNumber(inputNumber);
    this.gameCount = inputNumber;
    this.startRacing();
    this.printWinner();
  }
}

export default App;
