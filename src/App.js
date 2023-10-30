import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from './constant/gameMessage.js';
import Car from './car.js';
import Game from './game.js';
import Input from './inputView.js';

class App {
  async play() {
    const userInput = new Input();
    const carNames = await userInput.inputCarNames();
    const tryTimes = await userInput.inputNumberOfTimes();

    const cars = carNames.map((name) => new Car(name));
    const racingGame = new Game(cars);
    Console.print(GAME_MESSAGE.GAME_RESULT);

    racingGame.race(tryTimes);

    const winners = racingGame.getWinners();
    Console.print(winners);
  }
}

export default App;
