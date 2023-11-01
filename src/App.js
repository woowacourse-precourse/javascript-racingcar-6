import { Console } from '@woowacourse/mission-utils';
import { Input } from './input.js';
import { Car } from './car.js';
import { Racing } from './racing.js';

class App {
  constructor() {
    this.input = new Input();
  }

  async play() {
    const cars = await this.initCars();
    const gameCount = await this.input.gameCount();

    this.racing = new Racing(cars, gameCount);

    Console.print(`실행 결과`);
    while (!this.racing.isEnd()) {
      this.racing.playRound();
      this.racing.printRoundResult();
    }

    this.racing.printWinner();
  }

  async initCars() {
    const carNames = await this.input.carNames();
    return carNames.map((name) => new Car(name));
  }
}

const app = new App();
app.play();

export default App;
