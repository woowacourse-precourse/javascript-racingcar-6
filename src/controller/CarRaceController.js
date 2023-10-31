import Car from '../models/Car.js';
import CarGame from '../models/CarRace.js';
import GameResult from '../models/RaceProcess.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { Console } from '@woowacourse/mission-utils';

class CarRaceController {
  #records;
  #race;
  #process;

  async startRace() {
    const carNames = await InputView.readCarNames();
    const startLine = new Car().convertStringToMap(carNames);
    this.playGameStage(startLine);
  }

  async playGameStage(startLine) {
    const attempts = await InputView.readAttempts();
    this.#race = new CarGame();
    const forwards = this.#race.checkPosition(startLine, attempts);
    this.checkProcessStage(forwards, Number(attempts));
  }

  checkProcessStage(forwards, attempts) {
    OutputView.printResultMessage();
    this.#process = new GameResult();

    for (let i = 0; i <= attempts; i += 1) {
      this.#records = this.#process.getForwardProcess(forwards);
      OutputView.printRaceProcess(this.#records);
      Console.print('\n');
    }
    this.determineWinnerStage(this.#records);
  }

  determineWinnerStage(forwards) {
    const winners = this.#process.getWinner(forwards);
    OutputView.printWinner(winners);
  }
}

export default CarRaceController;
