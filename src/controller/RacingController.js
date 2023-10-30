import RacingCarValidatorValidator from "../validate/RacingCarValidator.js";
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
    this.#racingCarValidator = new RacingCarValidatorValidator();
    this.#racingCarArray = [];
    this.#retryCount = 0;
  }

  async run() {
    await this.#createRacingCars()
    await this.#setRetryCount();
    await this.#outputView.outputRetryResult();
    for (let counter = 0; counter < this.#retryCount ; counter++) {
      this.#advanceRacingCars();
      this.#getDisplacements();
    }
  }

  async #createRacingCars() {
    while (true) {
      const racingCarNameArray = await this.#inputView.readRacingCarNames();

      if (this.#racingCarValidator.isValidNameArray(racingCarNameArray)) {
        racingCarNameArray.forEach(element => {
          this.#racingCarArray.push(new RacingCar(element));
        });

        break
      } else {
        this.#outputView.retryInputRacingCarNames();
      }
    }
  }

  async #setRetryCount() {
    this.#retryCount = await this.#inputView.readRetryCount();
  }

  #advanceRacingCars() {
    this.#racingCarArray.forEach((car) => {
      car.advance();
    })
  }

  #getDisplacements() {
    this.#racingCarArray.forEach((car) => {
      this.#outputView.printRacingCarState(car);
    })
    this.#outputView.printNewLine();
  }
}

export default RacingController;
