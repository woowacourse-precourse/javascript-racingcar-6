import { Console } from '@woowacourse/mission-utils';
import RaceManager from './RaceManager.js';
import ReceptionDesk from './ReceptionDesk.js';
import Referee from './Referee.js';
import ScoreBoard from './ScoreBoard.js';
import { MOVEMENT_STATUS } from './constants/messagesConstants.js';

function race(cars, attempts) {
  Console.print(MOVEMENT_STATUS);
  for (let i = 0; i < attempts; i += 1) {
    cars.forEach((car) => {
      const randomNumber = RaceManager.generateRandomNumber();
      car.move(randomNumber);
    });
    ScoreBoard.announceInterimResult(cars);
    Console.print('');
  }
}

class App {
  async play() {
    const cars = await ReceptionDesk.registerRacingCars();
    const attempts = await RaceManager.getNumberOfAttempts();
    race(cars, attempts);
    const winners = Referee.checkWinners(cars);
    ScoreBoard.announceWinners(winners);
  }
}

export default App;
