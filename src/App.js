import RaceManager from './RaceManager.js';
import ReceptionDesk from './ReceptionDesk.js';
import Referee from './Referee.js';
import ScoreBoard from './ScoreBoard.js';
import {
  printLineBreak,
  printRaceStatusMessage,
} from './functions/printMessages.js';

function race(cars, attempts) {
  for (let i = 0; i < attempts; i += 1) {
    cars.forEach((car) => {
      const randomNumber = RaceManager.generateRandomNumber();
      car.move(randomNumber);
    });
    ScoreBoard.announceInterimResult(cars);
    printLineBreak();
  }
}

class App {
  async play() {
    const cars = await ReceptionDesk.registerRacingCars();
    const attempts = await RaceManager.getNumberOfAttempts();
    printLineBreak();

    printRaceStatusMessage();
    race(cars, attempts);
    const winners = Referee.checkWinners(cars);
    ScoreBoard.announceWinners(winners);
  }
}

export default App;
