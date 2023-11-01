import { Console } from '@woowacourse/mission-utils';
import RacingCar from './RacingCar.js';
import { CONSOLE_MESSAGE, ERROR_MESSAGE } from './constants.js';

class App {
  async play() {
    const racingCarArray = await this.makeNamesInputIntoCarArray();
    const gameChance = await this.getGameChanceInput();

    this.executeAllRounds(racingCarArray, gameChance);
    this.printWinner(racingCarArray);
  }

  async makeNamesInputIntoCarArray() {
    const names = await Console.readLineAsync(CONSOLE_MESSAGE.CAR_NAMES);
    const namesArray = this.makeStringIntoNameArray(names);
    const carArray = namesArray.map((name) => new RacingCar(name));
    return carArray;
  }

  makeStringIntoNameArray(names) {
    const splittedNames = names.split(',');
    this.validateNameArray(splittedNames);
    return splittedNames;
  }

  validateNameArray(inputArray) {
    const uniqueSet = new Set(inputArray);
    if (inputArray.length !== uniqueSet.size)
      throw new Error(ERROR_MESSAGE.DUPLICATED_NAME);

    for (const name of inputArray) {
      this.validateEachName(name);
    }
  }

  validateEachName(name) {
    if (name.replace(/\s/g, '').length !== name.length)
      throw new Error(ERROR_MESSAGE.BLANK_EXISTS);
    if (name.length > 5) throw new Error(ERROR_MESSAGE.TOO_LONG);
  }

  async getGameChanceInput() {
    const chanceInput = await Console.readLineAsync(
      CONSOLE_MESSAGE.GAME_CHANCES
    );
    if (Number.isNaN(Number(chanceInput)))
      throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
    const chance = parseInt(chanceInput, 10);
    return chance;
  }

  executeAllRounds(carArray, chance) {
    Console.print(CONSOLE_MESSAGE.EXECUTION_RESULT);
    for (let i = 0; i < chance; i++) {
      this.executeEachRound(carArray);
    }
  }

  executeEachRound(carArray) {
    carArray.forEach((car) => {
      car.moveOrStay();
    });
    this.printRoundResult(carArray);
  }

  printRoundResult(carArray) {
    carArray.forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.moveCount)}`);
    });
    Console.print('');
  }

  printWinner(carArray) {
    const winnerArray = this.findWinner(carArray);
    const concatenatedName = winnerArray.join(', ');
    Console.print(`${CONSOLE_MESSAGE.FINAL_WINNER} : ${concatenatedName}`);
  }

  findWinner(carArray) {
    const maxMoveCount = Math.max(...carArray.map((car) => car.moveCount));
    const winnerArray = carArray
      .filter((car) => car.moveCount === maxMoveCount)
      .map((car) => car.name);
    return winnerArray;
  }
}

export default App;
