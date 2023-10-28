import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';
import InputCars from './InputCars.js';
import InputMoveCount from './InputMoveCount.js';

class App {
  #carNames = [];
  #moveCount;

  async play() {
    await this.setCarNames();
  }

  async setCarNames() {
    const inputCars = new InputCars();
    this.#carNames = await inputCars.createCars();
    await this.movementCount();
  }

  async movementCount() {
    const inputMoveCount = new InputMoveCount();
    this.#moveCount = await inputMoveCount.getMoveCount();

    this.startRace();
  }

  startRace() {
    const move = this.#moveCount;
    Console.print('실행 결과');

    for (let i = 0; i < move; i++) {
      this.calculateMove();
    }

    this.printWinner();
  }

  calculateMove() {
    this.#carNames.forEach(car => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        car.printPosition();
      }
      this.showProgress(car.getName(), car.getPosition());
    });
    Console.print(' ');
  }

  showProgress(name, position) {
    Console.print(`${name} : ${position.join('')}`);
  }

  printWinner() {
    const maxPosition = Math.max(
      ...this.#carNames.map(car => car.getPosition().length),
    );
    const winners = this.#carNames.filter(
      car => car.getPosition().length === maxPosition,
    );
    Console.print(
      '최종 우승자 : ' + winners.map(car => car.getName()).join(', '),
    );
  }
}

export default App;
