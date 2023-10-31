import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import CarRace from '../model/CarRace';
import getData from '../utils/getData';

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
    return this.printRace(this.carRace, tryCount);
  }

  async printRace(carRace, tryCount) {
    const { cars } = carRace;
    for (let i = 0; i < tryCount; i += 1) {
      carRace.getRaceRound();
      OutputView.roundResult(cars);
    }

    const winners = await getData.getMaxForwardData(cars);
    OutputView.printMessage();
    OutputView.winnerResult(winners);
  }
}

export default RaceController;
