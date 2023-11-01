import GameConsole from './view/console.js';
import Car from './model/car.js';
import { getRandomNumber } from './utils/random.js';
import { getDistanceToMove } from './utils/common.js';
class App {
  #cars = [];
  #round = 0;

  async play() {
    const carNames = await GameConsole.getCarNames();
    carNames.forEach((carName) => {
      this.#cars.push(new Car(carName));
    });

    this.#round = await GameConsole.getRound();
    GameConsole.printEmptyLine();

    for (let round = 0; round < this.#round; round++) {
      this.#cars.forEach(this.#moveCar);

      GameConsole.printRoundResult(this.#cars);
    }

    GameConsole.printGameWinner(this.#cars);
  }

  #moveCar(car) {
    const randomNum = getRandomNumber();
    car.move(getDistanceToMove(randomNum));
  }
}

export default App;
