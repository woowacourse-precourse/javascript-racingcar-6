import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './constants/Messages.js';
import { validateInputVehicles } from './utils/validation.js';

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

  async play() {
    this.setVehicleList();
  }
}

export default App;
