import { Console, Random } from "@woowacourse/mission-utils";
const InputError = require("./lib/utils/error.js");
const { GAME_MESSAGE, WORD } = require("./lib/constants/message.js");

class App {
  constructor() {
    this.Error = new InputError();
  }

  async play() {
    const carList = await this.getCarList();
    const count = await this.getTryCount();

    this.moveForwardCar(carList, count);
  }

  async getCarList() {
    const carInput = await Console.readLineAsync(GAME_MESSAGE.CAR_INPUT);
    const carList = [...carInput.split(",")];

    this.Error.validateCarInput(carList);

    return carList;
  }

  async getTryCount() {
    const tryCount = await Console.readLineAsync(GAME_MESSAGE.COUNT_INPUT);

    this.Error.validateCountInput(tryCount);

    return tryCount;
  }

  moveForwardCar(carList, count) {
    Console.print(GAME_MESSAGE.RESULT);

    let score = {};
    carList.forEach((car) => (score[car] = 0));
    for (let i = 0; i < count; i++) {
      this.round(carList, score);
    }

    const maxScore = Math.max(...carList.map((car) => score[car]));
    const result = carList.filter((car) => score[car] === maxScore);
    Console.print(`${GAME_MESSAGE.WINNER} : ${result.join(", ")}`);
  }

  round(carList, score) {
    carList.forEach((car) => {
      const randomValue = Random.pickNumberInRange(0, 9);

      if (randomValue >= 4) score[car] += 1;
      Console.print(`${car} : ${WORD.PROGRESS.repeat(score[car])}`);
    });
  }
}

export default App;
