import { Console, MissionUtils } from '@woowacourse/mission-utils';
import GAME_MESSAGE from './constant/gameMessage.js';
import ERROR_MESSAGE from './constant/errorMessage.js';
import Car from './car.js';
import Game from './game.js';

class App {
  async play() {
    const playerNames = await this.printGameMessage();
    const times = await this.printNumberOfTimes();

    const cars = playerNames.map((name) => new Car(name));
    const racingGame = new Game(cars);
    Console.print(GAME_MESSAGE.GAME_RESULT);

    racingGame.race(times);

    const winners = racingGame.getWinners();
    Console.print(winners);
  }

  isValidNameFormat(names) {
    return names.every((name) => name.length <= 5);
  }

  includeSemiColon(input) {
    return input.includes(',');
  }

  toArray(input) {
    this.input = input;
    if (!this.includeSemiColon(input)) {
      throw new Error(ERROR_MESSAGE.DIVISION_BY_SEMICOLON);
    }
    const names = input.split(',').map((name) => name.trim());
    if (!this.isValidNameFormat(names)) {
      throw new Error(ERROR_MESSAGE.LESS_THAN_FIVE);
    }
    return names;
  }

  async printGameMessage() {
    const playerInput = await Console.readLineAsync(
      GAME_MESSAGE.INPUT_CAR_NAME,
    );
    const playerCarName = this.toArray(playerInput);
    return playerCarName;
  }

  async printNumberOfTimes() {
    const playerInput = await Console.readLineAsync(
      GAME_MESSAGE.INPUT_NUMBER_OF_TIMES,
    );
    const numberOfTimes = playerInput.split('').map(Number);
    return numberOfTimes[0];
  }
}

export default App;
