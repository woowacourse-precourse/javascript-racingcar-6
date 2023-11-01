import Racing from '../models/Racing.js';
import Validate from '../models/Validate.js';
import Convert from '../utils/Convert.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class GameController {
  #carDistanceMap;

  #roundNumber;

  async progressGame() {
    await this.settingCarList();
    await this.settingRound();
    this.roundResult();
    this.finalResult();
  }

  async settingCarList() {
    const nameInputValue = await InputView.carList();
    Validate.inputCar(nameInputValue);
    this.#carDistanceMap = Convert.stringToMap(nameInputValue);
  }

  async settingRound() {
    const roundInputValue = await InputView.round();
    Validate.inputRound(roundInputValue);
    this.#roundNumber = Number(roundInputValue);
  }

  roundResult() {
    OutputView.printEmptystring();
    OutputView.printResultInfo();
    this.roundCount = 1;
    while (this.roundCount <= this.#roundNumber) {
      Racing.movement(this.#carDistanceMap);
      this.#carDistanceMap.forEach((value, key) => {
        OutputView.printRoundResult(key, value);
      });
      OutputView.printEmptystring();
      this.roundCount += 1;
    }
  }

  finalResult() {
    const distanceCarMap = Convert.swapMap(this.#carDistanceMap);
    const winnerArr = [...distanceCarMap].sort((a, b) => b[0] - a[0])[0];
    const winner = winnerArr[1].join(', ');
    OutputView.printFinalResult(winner);
  }
}

export default GameController;
