import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './constants/Messages.js';
import {
  validateInputRound,
  validateInputVehicles,
} from './utils/validation.js';

class App {
  constructor() {
    this.vehicleList = [];
    this.round = 0;
  }

  async setVehicleList() {
    const inputVehicles = await Console.readLineAsync(
      MESSAGES.REQUEST.INPUT_VEHICLES,
    );

    validateInputVehicles(inputVehicles);

    this.vehicleList = inputVehicles.split(',');
  }

  async setRound() {
    const inputRound = await Console.readLineAsync(
      MESSAGES.REQUEST.INPUT_ROUND,
    );

    validateInputRound(inputRound);

    this.round = +inputRound;
  }

  async play() {
    await this.setVehicleList();
    await this.setRound();
  }
}

export default App;
