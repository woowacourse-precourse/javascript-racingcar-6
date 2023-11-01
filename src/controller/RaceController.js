import CarModel from '../model/CarModel.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';
import validation from '../utils/validation.js';

class RaceController {
  #CarModel;

  #moveCount;

  async setCarList() {
    const input = await inputView.carList();
    const carList = input.split(',');
    const splitInput = carList.map((carName) => carName.trim());
    validation.validateCarNames(splitInput);
    this.#CarModel = new CarModel(splitInput);
  }

  async setMoveCount() {
    const input = await inputView.moveCount();
    validation.validateMoveCount(input);
    this.#moveCount = parseInt(input, 10);
  }

  startRace() {
    outputView.printTitle();
    for (let i = 0; i < this.#moveCount; i += 1) {
      const results = this.#CarModel.updateRaceResults();
      results.forEach((result) => {
        outputView.printResult(result.name, result.move);
      });
      outputView.printNewline();
    }
  }

  displayWinners() {
    const winners = this.#CarModel.getWinners();
    if (winners.length > 0) {
      outputView.printWinner(winners);
    }
  }
}

export default RaceController;
