import { Console } from '@woowacourse/mission-utils';
import RacingCar from './RacingCar.js';
import { CONSOLE_MESSAGE, ERROR_MESSAGE } from './constants.js';

class App {
  async play() {
    const carNames = await Console.readLineAsync(CONSOLE_MESSAGE.CAR_NAMES);
    const carNameArray = makeNameArray(carNames);
    const carObjectArray = carNameArray.map((name) => new RacingCar(name));

    const chanceInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.GAME_CHANCES
    );
    if (Number.isNaN(Number(chanceInput)))
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    const gameChance = parseInt(chanceInput, 10);

    Console.print(CONSOLE_MESSAGE.EXECUTION_RESULT);
    for (let i = 0; i < gameChance; i++) {
      carObjectArray.forEach((car) => {
        car.moveOrStay();
      });

      printResult(carObjectArray);
    }
    const winners = findWinner(carObjectArray);
    printWinner(winners);
  }
}

function makeNameArray(names) {
  const splittedNames = names.split(',');
  const uniqueNamesSet = new Set(splittedNames);
  if (splittedNames.length !== uniqueNamesSet.size)
    throw new Error(ERROR_MESSAGE.DUPLICATED_NAME);

  for (const name of splittedNames) {
    if (name.trim().length !== name.length)
      throw new Error(ERROR_MESSAGE.BLANK_EXISTS);
    if (name.length > 5) throw new Error(ERROR_MESSAGE.TOO_LONG);
  }
  return splittedNames;
}

function printResult(carArray) {
  carArray.forEach((car) => {
    Console.print(`${car.name} : ${'-'.repeat(car.moveCount)}`);
  });
  Console.print('');
}

function findWinner(carArray) {
  const maxMoveCount = Math.max(...carArray.map((car) => car.moveCount));
  const winnerArray = carArray
    .filter((car) => car.moveCount === maxMoveCount)
    .map((car) => car.name);
  return winnerArray;
}

function printWinner(winnerArray) {
  const concatenatedName = winnerArray.join(', ');
  Console.print(`${CONSOLE_MESSAGE.FINAL_WINNER} : ${concatenatedName}`);
}

export default App;
