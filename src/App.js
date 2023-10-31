import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import GameBoard from "./GameBoard.js";

const LIMIT_NAME_LENGTH = 5;
const MIN_COUNT_ERROR_MESSAGE =
  "[ERROR] 두 개 이상의 자동차 이름을 입력해주세요.";
const NAME_LENGTH_ERROR_MESSAGE =
  "[ERROR] 이름이 잘못된 형식입니다. 자동차의 이름은 5글자 이하 또는 한글자 이상 이름으로 입력하세요.";
const GAME_COUNT_ERROR_MESSAGE =
  "[ERROR] 잘못된 숫자 형식입니다. 1 이상의 숫자로만 입력하세요.";

class App {
  async play() {
    const cars = await this.getCars();
    const gameCount = await this.getGameCount();

    const board = new GameBoard(cars);

    for (let i = 0; i < gameCount; i++) {
      cars.forEach((car) => {
        car.drive();
      });

      board.printResult();
    }

    board.printWinner();
  }

  async getCars() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNamesArray = carNames.split(",");
    validateCarNames(carNamesArray);

    const cars = carNamesArray.map((name) => {
      return new Car(name);
    });

    return cars;
  }

  async getGameCount() {
    const gameCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    validateGameCount(gameCount);

    return gameCount;
  }
}

function validateCarNames(carNamesArray) {
  if (carNamesArray.length < 2) {
    throw new Error(MIN_COUNT_ERROR_MESSAGE);
  }

  carNamesArray.forEach((carName) => {
    const carNameLength = carName.trim().length;
    if (carNameLength > LIMIT_NAME_LENGTH || carNameLength < 1) {
      throw new Error(NAME_LENGTH_ERROR_MESSAGE);
    }
  });
}

function validateGameCount(count) {
  const numberStringRegex = /^[1-9]\d*$/;
  if (!count.match(numberStringRegex)) {
    throw new Error(GAME_COUNT_ERROR_MESSAGE);
  }
}

export default App;
