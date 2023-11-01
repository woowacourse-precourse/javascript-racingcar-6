import Car from './car.js';
import Attempt from './attempt.js';
import Winner from './Winner.js';
import { Console as MissionUtilsConsole } from '@woowacourse/mission-utils';

class App {
  async play() {
    const cars = await Car.createCarsFromInput();
    const numberOfAttempts = await Attempt.getNumberOfAttempts();

    MissionUtilsConsole.print('\n실행 결과');
    for (let i = 0; i < numberOfAttempts; i++) {
        cars.forEach(car => car.move());
        cars.forEach(car => {
            MissionUtilsConsole.print(`${car.name} : ${car.getDistanceString()}`);
        });
        MissionUtilsConsole.print('\n');
    }

    const winners = await Winner.start(cars, numberOfAttempts);
    const winnerNames = winners.map(winner => winner.name);

    if (winners.length === 1) {
        MissionUtilsConsole.print(`최종 우승자 : ${winnerNames}`);
    } else {
        MissionUtilsConsole.print(`최종 우승자 : ${winnerNames.join(', ')}`);
    }
  }
}

export default App;
