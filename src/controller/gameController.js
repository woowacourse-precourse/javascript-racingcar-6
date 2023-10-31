import { Console, Random } from '@woowacourse/mission-utils';
import Car from '../utils/car.js';
import Race from '../utils/race.js';
import validator from '../validator/validator.js';

class GameController {
  constructor() {
    this.cars = [];
    this.chance = 0;
    this.race;
  }

  async startGame() {
    this.inputCarName().then(() => {
      this.inputNumber().then(() => {
        this.startRace();
      });
    });
  }

  async inputCarName() {
    await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    ).then((input) => {
      this.cars = input.split(',').map((carName) => new Car(carName));
      validator.validateCarName(this.cars);
    });
  }

  async inputNumber() {
    this.chance = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    validator.validateChance(this.chance);
  }

  startRace() {
    this.race = new Race(this.cars);
    Console.print('\n실행 결과');
    for (let i = 0; i < this.chance; i++) {
      this.race.advanceCar();
      this.race.printRaceResult();
    }
    this.printResult();
  }

  printResult() {
    this.race.printWinner();
  }
}

export default GameController;
