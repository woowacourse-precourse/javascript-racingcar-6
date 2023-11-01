import { Race } from './CarRace.js';
import { PrintRace } from './PrintRace.js';

export class RaceManage {
  constructor(carNames) {
    this.name = new Race(carNames);
  }

  startRace(times) {
    for (let i = 0; i < times; i++) {
      this.name.gameRound();
      this.viewRace();
    }
    this.viewWinners();
  }

  viewRace() {
    this.name.cars.forEach((car) => {
      PrintRace.printFoward(car);
    });
    PrintRace.printEmptyLine();
  }

  viewWinners() {
    const winners = this.name.getWinners();
    PrintRace.printWinners(winners);
  }
}
