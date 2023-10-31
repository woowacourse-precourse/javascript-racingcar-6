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

  moveVehicle(vehicle) {
    const randomNumber = Random.pickNumberInRange(0, 9);
    const moveCondition = randomNumber >= 4;
    if (moveCondition) vehicle.move();
  }

  printRoundResult(vehicle) {
    const [vehicleName, vehiclePosition] = vehicle.getStatus();
    const resultMessage = `${vehicleName} : ${'-'.repeat(vehiclePosition)}`;
    Console.print(resultMessage);
  }

  processRound() {
    let roundCount = 0;
    Console.print(`\n${MESSAGES.GAME_RESULT}`);

    while (this.round > roundCount) {
      this.vehicles.forEach(vehicle => {
        this.moveVehicle(vehicle);
        this.printRoundResult(vehicle);
      });

      Console.print('');
      roundCount += 1;
    }
  }

  getWinners() {
    const gameResult = this.vehicles.map(result => Object.values(result));
    const farthestPosition = Math.max(...gameResult.map(result => result[1]));
    const winners = gameResult
      .filter(result => result[1] === farthestPosition)
      .map(result => result[0]);

    return winners;
  }

  printWinners() {
    const winners = this.getWinners();
    const printWinnerMessage = `${MESSAGES.GAME_WINNER} : ${winners.join(',')}`;
    Console.print(printWinnerMessage);
  }

  async play() {
    await this.setVehicles();
    await this.setRound();
    this.processRound();
    this.printWinners();
  }
}

export default App;
