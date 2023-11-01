import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import Input from './utils/Input.js';

class Game {
  #cars;

  #trialCount;

  #winningPosition;

  #winners;

  #input;

  #gameResultQuery = '\n실행 결과';

  #winnersQuery = '최종 우승자 : ';

  constructor() {
    this.#cars = [];
    this.#trialCount = 0;
    this.#winningPosition = 0;
    this.#winners = [];
    this.#input = new Input();
  }

  async #init() {
    const names = await this.#input.getCarNames();
    this.#cars = names.map((name) => new Car(name));

    this.#trialCount = await this.#input.getTrialCount();
  }

  async run() {
    await this.#init();
    this.#printResult();
  }

  #printResult() {
    Console.print(this.#gameResultQuery);
    for (let i = 0; i < this.#trialCount; i += 1) {
      this.#executeRound();
      Console.print('');
    }
    Console.print(`${this.#winnersQuery}${this.#winners.join(', ')}`);
  }

  #executeRound() {
    this.#cars.forEach((car) => {
      car.move();
      car.print();
      this.#winningPosition = Math.max(this.#winningPosition, car.getPosition());
    });
    this.#winners = this.#cars.filter((car) => car.position === this.#winningPosition);
  }
}

export default Game;
