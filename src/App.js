import { Random, Console } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.movement = '';
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    this.movement = '-'.repeat(randomNumber >= 4 ? randomNumber : 0);
  }
}

class App {
  constructor() {
    this.cars = [];
    this.rounds = 0;
  }

  async #getInput() {
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    this.#validateCarNames(carNames);

    const roundsInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.#validateRounds(roundsInput);
  }

  #validateCarNames(input) {
    const carNames = input.split(',').map(name => name.trim());
    if (carNames.some(name => name.length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
    }
    this.cars = carNames.map(name => new Car(name));
  }

  #validateRounds(input) {
    const rounds = parseInt(input, 10);
    if (isNaN(rounds) || rounds <= 0) {
      throw new Error('[ERROR] 잘못된 횟수입니다. 양수인 정수를 입력하세요.');
    }
    this.rounds = rounds;
  }

  #playRacingCar() {
    Array.from({ length: this.rounds }).map((_, round) => {
      this.cars.forEach(car => car.move());
      this.#printResult(round + 1);
    });
  }

  #printResult(round) {
    this.cars.forEach(car => {
      Console.print(`${car.name} : ${car.movement}`);
    });
    Console.print('\n');
  }

  #getWinners() {
    const maxMovement = Math.max(...this.cars.map(car => car.movement.length));
    const winners = this.cars.filter(car => car.movement.length === maxMovement);
    return winners.map(car => car.name).join(', ');
  }

  #printWinners() {
    const winners = this.getWinners();
    Console.print(`\n최종 우승자: ${winners}`);
  }

  async play() {
    await this.#getInput();
    this.#playRacingCar();
    this.#printWinners();
  }
}

export default App;
