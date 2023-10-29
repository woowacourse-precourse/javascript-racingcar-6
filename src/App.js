import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async createCarObjectFromInput() {
    const carObject = {};

    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carInputString = await Console.readLineAsync("");
    const carNames = carInputString.split(",");

    carNames.forEach((name) => {
      carObject[name] = 0;
    });

    return carObject;
  }

  async askForRacingCount() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const racingCount = await Console.readLineAsync("");

    return parseInt(racingCount, 10);
  }

  runRacing(carObject, racingCount) {
    const newObject = { ...carObject };
    const carNames = Object.keys(newObject);

    for (let count = 0; count < racingCount; count += 1) {
      carNames.forEach((car) => {
        const number = Random.pickNumberInRange(0, 9);
        newObject[car] += number >= 4 ? 1 : 0;

        Console.print(`${car} : ${"-".repeat(newObject[car])}`);
      });

      Console.print(" ");
    }

    const maxDistance = Math.max(...Object.values(newObject));
    const winners = Object.keys(newObject).filter(
      (car) => newObject[car] === maxDistance
    );

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  async play() {
    const carObject = await this.createCarObjectFromInput();
    const racingCount = await this.askForRacingCount();

    this.runRacing(carObject, racingCount);
  }
}

export default App;
