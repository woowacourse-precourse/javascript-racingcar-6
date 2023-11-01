import Car from './car.js';
import Attempt from './attempt.js';
import Winner from './Winner.js';
import { Console as MissionUtilsConsole } from '@woowacourse/mission-utils';

class App {
  async play() {
    const cars = await this.initializeCars();
    const numberOfAttempts = await this.getNumberOfAttempts();
  
    this.printExecutionResult(cars, numberOfAttempts);
  
    const winners = await this.determineWinners(cars, numberOfAttempts);
    this.printFinalWinners(winners);
  }
  
  async initializeCars() {
    return await Car.createCarsFromInput();
  }
  
  async getNumberOfAttempts() {
    return await Attempt.getNumberOfAttempts();
  }
  
  printExecutionResult(cars, numberOfAttempts) {
    MissionUtilsConsole.print('\n실행 결과');
    for (let i = 0; i < numberOfAttempts; i++) {
        cars.forEach(car => car.move());
        cars.forEach(car => {
          MissionUtilsConsole.print(`${car.name} : ${car.getDistanceString()}`);
        });
        MissionUtilsConsole.print('\n');
    }
  }
  
  async determineWinners(cars, numberOfAttempts) {
    return await Winner.start(cars, numberOfAttempts);
  }
  
  printFinalWinners(winners) {
    const winnerNames = winners.map(winner => winner.name);
  
    if (winners.length === 1) {
      MissionUtilsConsole.print(`최종 우승자 : ${winnerNames}`);
    } else {
      MissionUtilsConsole.print(`최종 우승자 : ${winnerNames.join(', ')}`);
    }
  }
}

export default App;
