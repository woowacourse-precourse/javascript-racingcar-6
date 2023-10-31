import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import CarRace from '../model/CarRace';
import getForwardData from '../utils/getForwardData';

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
    return this.runRace(this.carRace, tryCount);
  }

  async runRace(carRace, tryCount) {
    for (let i = 0; i < tryCount; i += 1) {
      carRace.getRaceRound();
      OutputView.roundResult(carRace.cars);
    }

    const winners = await getForwardData(carRace.cars);
    OutputView.printMessage();
    OutputView.winnerResult(winners);
  }
}

export default RaceController;
