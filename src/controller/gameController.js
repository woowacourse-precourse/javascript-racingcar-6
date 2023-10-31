import { Console, Random } from '@woowacourse/mission-utils';
import Car from '../utils/car.js';
import Race from '../utils/race.js';
import validator from '../validator/validator.js';
import MESSAGE from '../constants/constant.js';

class GameController {
  constructor() {
    this.cars = [];
    this.chance = 0;
    this.race;
  }

  async startGame() {
    await this.inputCarName().then(async () => {
      await this.inputNumber().then(() => {
        this.startRace();
      });
    });
  }

  async inputCarName() {
    await Console.readLineAsync(MESSAGE.GAME.START).then((input) => {
      this.cars = input.split(',').map((carName) => new Car(carName));
      validator.validateCarName(this.cars);
    });
  }

  async inputNumber() {
    this.chance = await Console.readLineAsync(MESSAGE.GAME.INPUT);
    validator.validateChance(this.chance);
  }

  startRace() {
    this.race = new Race(this.cars);
    Console.print(MESSAGE.GAME.RESULT);
    for (let i = 0; i < this.chance; i++) {
      this.race.advance();
      this.race.printRaceResult();
    }
    this.printResult();
  }

  printResult() {
    this.race.printWinner();
  }
}

export default GameController;
