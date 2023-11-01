import { SYSTEM } from '../constants/System.js';
import FinalWinnerSelector from './FinalWinnerSelector.js';
import RandomNumberGenerator from './RandomNumberGenerator.js';

class RacingModel {
  #vehicle;

  constructor(vehicle) {
    this.#vehicle = vehicle;
  }

  // 오직 내부에서만 사용하고 private 메서드이기 때문에 static을 사용하지 않음
  // eslint-disable-next-line class-methods-use-this
  #canMove() {
    const randomNumber = RandomNumberGenerator.run();
    return randomNumber >= SYSTEM.canMoveNumber;
  }

  saveNames(vehicleNames) {
    this.#vehicle.saveNames(vehicleNames);
  }

  racing() {
    const vehicleData = this.#vehicle.getData();
    vehicleData.forEach((progress, vehicle) => {
      if (!this.#canMove()) return;
      vehicleData.set(vehicle, `${progress}${SYSTEM.move}`);
    });
  }

  getData() {
    return this.#vehicle.getData();
  }

  getFinalWinner() {
    return FinalWinnerSelector.evaluate(this.#vehicle.getData());
  }
}

export default RacingModel;
