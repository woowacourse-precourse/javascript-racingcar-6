import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async getCarStatusFromUserInput() {
    try {
      const carsStatus = {};

      Console.print(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );

      const carNamesInput = await Console.readLineAsync("");
      const carNames = carNamesInput.split(",").map((name) => name.trim());

      this.validateCarNames(carNames);

      carNames.forEach((name) => {
        carsStatus[name] = 0;
      });

      return carsStatus;
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

  async getRaceCountFromUserInput() {
    try {
      Console.print("시도할 횟수는 몇 회인가요?");

      const raceCountInput = await Console.readLineAsync("");
      const racingCount = parseInt(raceCountInput, 10);

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

  runRacing(carsStatus, racingCount) {
    const updatedStatus = { ...carsStatus };
    const carNames = Object.keys(carsStatus);

    for (let count = 0; count < racingCount; count += 1) {
      carNames.forEach((car) => {
        const number = Random.pickNumberInRange(0, 9);
        updatedStatus[car] += number >= 4 ? 1 : 0;

        Console.print(`${car} : ${"-".repeat(updatedStatus[car])}`);
      });

      Console.print(" ");
    }

    const maxDistance = Math.max(...Object.values(updatedStatus));
    const winners = Object.keys(updatedStatus).filter(
      (car) => updatedStatus[car] === maxDistance
    );

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  async play() {
    const carsStatus = await this.getCarStatusFromUserInput();
    const racingCount = await this.getRaceCountFromUserInput();

    this.runRacing(carsStatus, racingCount);
  }
}

export default App;
