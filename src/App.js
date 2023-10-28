import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Car from './Car.js';
import MoveCount from './MoveCount.js';

class App {
  #carNames = [];
  #moveCount;

  async play() {
    await this.setCarNames();
  }

  async setCarNames() {
    const inputArray = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    inputArray.split(',').forEach(name => {
      const car = new Car(name);
      this.#carNames.push(car);
    });
    await this.movementCount();
  }

  async movementCount() {
    const inputMove =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.#moveCount = new MoveCount(inputMove);

    this.startRace();
  }

  startRace() {
    const move = this.#moveCount.getMove();
    Console.print('실행 결과');

    for (let i = 0; i < move; i++) {
      this.calculateMove(move);
    }
  }

  calculateMove(move) {
    this.#carNames.forEach(car => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        car.setPosition();
      }
      this.showProgress(car.getName(), car.getPosition());
    });
    Console.print(' ');
  }

  showProgress(name, position) {
    Console.print(`${name} : ${position.join('')}`);
  }
}

export default App;
