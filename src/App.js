import { Console, Random } from "@woowacourse/mission-utils";

const RANDOM_THRESHOLD = 4;
const RANDOM_RANGE_MIN = 0;
const RANDOM_RANGE_MAX = 9;
const MAX_CAR_NAME_LENGTH = 5;
class App {
  async play() {
    const carNames = await this.inputCarNames();
    this.checkCarNames(carNames);
    const countCars = carNames.length;
    const count = await this.inputCount();
    const carForwards = new Array(countCars).fill(0);

    this.playRounds(count, carForwards, carNames);
    this.printWinner(carForwards, carNames);
  }

  async inputCarNames() {
    const carInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    let carNames = [];

    if (typeof carInput === "string") {
      carNames = carInput.split(",");
    } else {
      throw new Error("[ERROR] : 문자만 입력해 주세요.");
    }

    return carNames;
  }

  checkCarNames(carNames) {
    carNames.forEach((car) => {
      if (car.length > MAX_CAR_NAME_LENGTH) {
        throw new Error("[ERROR] : 자동차 이름은 5자 이하만 입력 가능합니다.");
      }
    });
    return null;
  }

  async inputCount() {
    let count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    count = Number(count);

    if (Object.is(count, NaN)) {
      throw new Error("[ERROR] : 숫자를 입력해주세요.");
    }

    return count;
  }

  moveCars(carForwards) {
    carForwards.forEach((_, j) => {
      const forwardOrStop = Random.pickNumberInRange(
        RANDOM_RANGE_MIN,
        RANDOM_RANGE_MAX
      );
      if (forwardOrStop >= RANDOM_THRESHOLD) {
        carForwards[j] += 1;
      }
    });
  }

  printCarStatus(carForwards, carNames) {
    carForwards.forEach((car, j) => {
      const dashed = "-".repeat(car);
      Console.print(`${carNames[j]} : ${dashed}`);
    });
  }

  playRounds(count, carForwards, carNames) {
    for (let i = 0; i < count; i++) {
      this.moveCars(carForwards);
      this.printCarStatus(carForwards, carNames);
      Console.print("");
    }
  }

  printWinner(carForwards, carNames) {
    const maxValue = Math.max(...carForwards);
    const winners = carNames.filter((_, j) => carForwards[j] === maxValue);
    Console.print(`최종 우승자: ${winners.join(", ")}`);
  }
}

export default App;
