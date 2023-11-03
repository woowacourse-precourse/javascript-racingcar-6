import Car from '../models/Car.js';
import CarRace from '../models/CarRace.js';
import RaceProcess from '../models/RaceProcess.js';
import RandomNumberGenerator from '../utils/RandomNumberGenerator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { Console } from '@woowacourse/mission-utils';

class CarRaceController {
  #records;
  #race;

  async startRace() {
    const carNames = await InputView.readCarNames();
    const startLine = new Car().convertStringToMap(carNames);
    this.playGameStage(startLine);
  }

  async playGameStage(startLine) {
    const attempts = await InputView.readAttempts();
    const randomGenerator = RandomNumberGenerator;
    this.#race = new CarRace(randomGenerator);
    const forwards = this.#race.checkPosition(startLine, attempts);
    this.checkProcessStage(forwards, Number(attempts));
  }

  checkProcessStage(forwards, attempts) {
    OutputView.printResultMessage();
    const process = new RaceProcess();

    for (let i = 0; i <= attempts; i += 1) {
      this.#records = process.getForwardProcess(forwards);
      OutputView.printRaceProcess(this.#records);
      Console.print('\n');
    }
    this.determineWinnerStage(this.#records);
  }

  determineWinnerStage(forwards) {
    const winners = this.#race.getWinner(forwards);
    OutputView.printWinner(winners);
  }
}

export default CarRaceController;
