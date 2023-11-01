import { Console, Random } from "@woowacourse/mission-utils";
import { NUMBER, MESSAGE, ERRORS } from "./constants.js";
class App {
  constructor() {
    this.cars = [];
  }

  async play() {
    const { chance, carNameList } = await getInput();
    playGame(chance, carNameList);
  }
}

async function getInput() {
  try {
    const carNames = await Console.readLineAsync(MESSAGE.INPUT_NAMES);

    const carNameList = carNames.split(",");
    const isUnderFiveCharacter = carNameList.every(
      (name) => name.trim().length <= NUMBER.NAME_LENGTH
    );
    if (/[^a-zA-Z0-9,]/.test(carNames) || !isUnderFiveCharacter) {
      throw new Error(ERRORS.WRONG_INPUT);
    }

    const chance = await Console.readLineAsync(MESSAGE.CHANCE);

    if (!/^[1-9]\d*$/.test(chance)) {
      throw new Error(WRONG_INPUT);
    }

    return { chance, carNameList };
  } catch (error) {
    throw new Error(WRONG_INPUT);
  }
}

function playGame(chance, carNameList) {
  let runningCars = new Array(carNameList.length).fill(0);
  Console.print(MESSAGE.RESULT);
  for (let i = 0; i < chance; i++) {
    updateCars(runningCars);
    printCars(runningCars, carNameList);
  }
  printWinner(runningCars, carNameList);
}

function updateCars(runningCars) {
  for (let i = 0; i < runningCars.length; i++) {
    let number = Random.pickNumberInRange(1, 9);
    if (number >= NUMBER.CAN_MOVE) {
      runningCars[i] += 1;
    }
  }
}

function printCars(runningCars, carNameList) {
  for (let i = 0; i < runningCars.length; i++) {
    let running = "";
    for (let j = 0; j < runningCars[i]; j++) {
      running += "-";
    }
    Console.print(`${carNameList[i]} : ${running}`);
  }
  Console.print(" ");
}

function printWinner(runningCars, carNameList) {
  const cars = runningCars.map((run, idx) => ({ name: carNameList[idx], run }));

  const maxRunner = Math.max(...cars.map((car) => car.run));
  const winners = cars.filter((car) => car.run === maxRunner);
  const result = winners.map((car) => car.name).join(", ");

  Console.print(`${MESSAGE.WINNER}${result}`);
}

export default App;
