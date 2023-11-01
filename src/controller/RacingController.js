import RacingCarValidator from "../validate/RacingCarValidator.js";
import RacingCar from "../model/RacingCar.js";
import InputView from "../view/inputView.js";
import OutputView from "../view/OutputView.js";

class RacingController {
  #inputView;
  #outputView;
  #racingCarValidator;
  #racingCarArray;
  #retryCount;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#racingCarValidator = new RacingCarValidator();
    this.#racingCarArray = [];
    this.#retryCount = 0;
  }

  async run() {
    await this.#createRacingCars();
    await this.#setRetryCount();
    this.#outputView.outputRetryResult();

    for (let counter = 0; counter < this.#retryCount; counter++) {
      this.#advanceRacingCars();
      this.#getDisplacements();
    }

    this.#getWinner();
  }

  async #createRacingCars() {
    const racingCarNameArray = await this.#inputView.readRacingCarNames();

    this.#racingCarValidator.isValidNameArray(racingCarNameArray);
    racingCarNameArray.forEach(element => {
      this.#racingCarArray.push(new RacingCar(element));
    });
  }

  async #setRetryCount() {
    const retryCount = await this.#inputView.readRetryCount();

    this.#racingCarValidator.isValidCount(retryCount);
    this.#retryCount = retryCount;
  }

  #advanceRacingCars() {
    this.#racingCarArray.forEach((car) => {
      car.advance();
    });
  }

  #getDisplacements() {
    this.#racingCarArray.forEach((car) => {
      this.#outputView.printRacingCarState(car);
    });
    this.#outputView.printNewLine();
  }

  async #getWinner() {
    const winnerArray = [];
    const maxDisplacement = Math.max.apply(null, this.#racingCarArray.map(car => {
      return car.getDisplacement();
    }));

    this.#racingCarArray.forEach(car => {
      if (car.getDisplacement() === maxDisplacement) {
        winnerArray.push(car.getName());
      }
    });

    this.#outputView.outputFinalResult(winnerArray.join(', '));
  }
}

export default RacingController;
