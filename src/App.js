import { Random, Console } from "@woowacourse/mission-utils";

class Car {
  name = "";
  score = 0;

  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  printMyScore() {
    const number = Random.pickNumberInRange(0, 9);
    if (number >= 4) {
      this.score += 1;
    }
    const result = "-".repeat(this.score);
    Console.print(`${this.name} : ${result}`);
  }
}

class App {
  async play() {
    const carList = await this.getCarList();
    const tryNumber = await this.getTryNumber();

    Console.print("\n실행 결과");
    let maxScore = -1;
    Array.from({ length: tryNumber }).map(() => {
      carList.map((car) => {
        car.printMyScore();
      });
      Console.print("");
    });

    const winner = [];
    carList.map((data) => (maxScore = Math.max(maxScore, data.score)));
    const result = carList.filter((data) => maxScore === data.score);
    const lastWinner = result.map((data) => data.name).join(", ");
    Console.print(`최종 우승자 : ${lastWinner}`);
  }

  async getCarList() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carInput = await Console.readLineAsync("");
    const carInputArray = carInput.split(",");
    const carObjectArray = carInputArray.map((carName) => new Car(carName, 0));
    return carObjectArray;
  }

  async getTryNumber() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const tryNumber = await Console.readLineAsync("");
    return tryNumber;
  }
}

export default App;
