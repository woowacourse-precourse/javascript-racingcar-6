import { Random, Console } from '@woowacourse/mission-utils';
import Vehicle from './Vehicle.js';
import MESSAGES from './constants/Messages.js';
import { isValidInputRound, isValidInputVehicles } from './utils/validation.js';

class App {
  constructor() {
    this.vehicles = [];
    this.round = 0;
  }

  async setVehicles() {
    const inputVehicles = await Console.readLineAsync(
      MESSAGES.REQUEST.INPUT_VEHICLES,
    );

    isValidInputVehicles(inputVehicles);

    inputVehicles
      .split(',')
      .forEach(name => this.vehicles.push(new Vehicle(name)));
  }

  async setRound() {
    const inputRound = await Console.readLineAsync(
      MESSAGES.REQUEST.INPUT_ROUND,
    );

    isValidInputRound(inputRound);

    this.round = +inputRound;
  }

  processRound() {
    let count = 0;

    while (this.round > count) {
      this.vehicles.forEach(item => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        if (randomNumber >= 4) item.move();
      });

      count += 1;
    }
  }

  async play() {
    await this.setVehicles();
    await this.setRound();
    this.processRound();
  }
}

export default App;
