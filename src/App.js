import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async createCarObjectFromInput() {
    try {
      const carObject = {};

      Console.print(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );

      const carInputString = await Console.readLineAsync("");
      const carNames = carInputString.split(",").map((name) => name.trim());

      this.validateCarNames(carNames);

      carNames.forEach((name) => {
        carObject[name] = 0;
      });

      return carObject;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  validateCarNames(carNames) {
    const nameSet = new Set();

    for (let i = 0; i < carNames.length; i += 1) {
      const name = carNames[i];

      if (!name) {
        throw new Error("[ERROR] 자동차 이름이 비어있습니다.");
      }
      if (name.length > 5) {
        throw new Error(`[ERROR] 자동차 이름 '${name}'이/가 5자 초과입니다.`);
      }
      if (nameSet.has(name)) {
        throw new Error(`[ERROR] 자동차 이름 '${name}'이/가 중복됩니다.`);
      }

      nameSet.add(name);
    }
  }

  async askForRacingCount() {
    try {
      Console.print("시도할 횟수는 몇 회인가요?");

      const racingCountInput = await Console.readLineAsync("");
      const racingCount = parseInt(racingCountInput, 10);

      this.validateCount(racingCount);

      return racingCount;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  validateCount(count) {
    if (Number.isNaN(count)) throw new Error("[ERROR] 숫자만 입력 가능합니다.");
    if (count <= 0) throw new Error("[ERROR] 시도 횟수가 0 이하입니다.");
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
