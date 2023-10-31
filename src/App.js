import { Console, Random } from '@woowacourse/mission-utils';
import validator from './validator/validator.js';

class App {
  #cars = [];
  #number;

  constructor() {
    this.#cars = { name: '', move: 0 };
  }

  async play() {
    this.startGame();
  }

  startGame() {
    this.inputCarName().then(() => {
      this.inputNumber();
    });
  }

  async inputCarName() {
    await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    ).then((input) => {
      const carNames = input.split(',');
      this.#cars = carNames.map((name) => ({ name, move: 0 }));
      validator.validateCarName(carNames);
    });
  }

  async inputNumber() {
    this.#number = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    validator.validateChance(this.#number);
    this.startRace();
  }

  async startRace() {
    Console.print('\n실행 결과');
    for (let i = 0; i < this.#number; i++) {
      this.advanceCar();
      this.printRaceResult();
    }
    this.printWinner(this.getWinner());
  }

  async advanceCar() {
    this.#cars.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        this.move(car);
      }
    });
  }

  move(car) {
    car.move += 1;
  }

  printRaceResult() {
    this.#cars.forEach((car) => {
      const dashLine = '-'.repeat(car.move);
      Console.print(`${car.name} : ${dashLine}`);
    });
    Console.print(' ');
  }

  getWinner() {
    const maxAdvanced = Math.max(...this.#cars.map((car) => car.move));
    const winners = this.#cars
      .filter((car) => car.move === maxAdvanced)
      .map((car) => car.name);
    return winners;
  }

  printWinner(winner) {
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default App;
