import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import CarRace from '../model/CarRace';
import { ERROR_MESSAGE } from '../utils/constants';
import getForwardData from '../utils/getForwardData';

class RaceController {
  async insertInput() {
    try {
      const carNames = await InputView.carNames();
      const tryCount = await InputView.tryCount();
      const carRace = new CarRace(carNames);
      const winners = await this.runRace(carRace, tryCount);
      OutputView.printMessage();
      OutputView.winnerResult(winners);
    } catch (err) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  async runRace(carRace, tryCount) {
    for (let i = 0; i < tryCount; i += 1) {
      carRace.getRaceRound();
      OutputView.roundResult(carRace.cars);
    }

    return this.getWinners(carRace.cars);
  }

  async getWinners(cars) {
    const winners = await getForwardData(cars);
    return winners;
  }
}

export default RaceController;
