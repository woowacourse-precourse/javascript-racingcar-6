import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import CarRace from '../model/CarRace';
import formatOutput from '../utils/formatOutput';

class RaceController {
  constructor() {
    this.carRace = null;
  }

  async makeRace(carNames) {
    this.carRace = new CarRace(carNames);
  }

  async insertInput() {
    const carNames = await InputView.carNames();
    const tryCount = await InputView.tryCount();
    this.makeRace(carNames);
    return this.runRaceRounds(tryCount);
  }

  async runRaceRounds(tryCount) {
    Array.from({ length: tryCount }).forEach(() => {
      this.printRaceResult();
    });

    const winners = await formatOutput.findWinningCars(this.carRace.cars);
    this.printFinalResult(winners);
  }

  async printRaceResult() {
    this.carRace.getRaceRound();
    OutputView.roundResult(this.carRace.cars);
  }

  printFinalResult(winners) {
    OutputView.printMessage();
    OutputView.winnerResult(winners);
  }
}

export default RaceController;
