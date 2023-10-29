import { Console, Random } from "@woowacourse/mission-utils";

const MAX_NAME_LENGTH = 5;
const MIN_RANDOM_NUMBER = 0;
const MAX_RANDOM_NUMBER = 9;
const MOVE_THRESHOLD = 4;
const CAR_POSITION_SYMBOL = "-";
class App {
  async getCarStatusFromUserInput() {
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
  }

  validateCarNames(carNames) {
    const nameSet = new Set();

    carNames.forEach((name) => {
      if (!name) {
        throw new Error("[ERROR] 자동차 이름이 비어있습니다.");
      }
      if (name.length > MAX_NAME_LENGTH) {
        throw new Error(
          `[ERROR] 자동차 이름 '${name}'이/가 ${MAX_NAME_LENGTH}자 초과입니다.`
        );
      }
      if (nameSet.has(name)) {
        throw new Error(`[ERROR] 자동차 이름 '${name}'이/가 중복됩니다.`);
      }

      nameSet.add(name);
    });
  }

  async getRaceCountFromUserInput() {
    Console.print("시도할 횟수는 몇 회인가요?");

    const raceCountInput = await Console.readLineAsync("");
    const racingCount = parseInt(raceCountInput, 10);

    this.validateCount(racingCount);

    return racingCount;
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
        const number = Random.pickNumberInRange(
          MIN_RANDOM_NUMBER,
          MAX_RANDOM_NUMBER
        );
        updatedStatus[car] += number >= MOVE_THRESHOLD ? 1 : 0;

        Console.print(
          `${car} : ${CAR_POSITION_SYMBOL.repeat(updatedStatus[car])}`
        );
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
    try {
      const carsStatus = await this.getCarStatusFromUserInput();
      const racingCount = await this.getRaceCountFromUserInput();

      this.runRacing(carsStatus, racingCount);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default App;
