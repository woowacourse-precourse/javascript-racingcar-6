import RacingCarValidatorValidator from "../validate/RacingCarValidator.js";
import RacingCar from "../model/RacingCar.js";
import InputView from "../view/inputView.js";
import OutputView from "../view/OutputView.js";

class RacingController {
  #inputView;
  #outputView;
  #racingCarValidator;
  #racingCarArray;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#racingCarValidator = new RacingCarValidatorValidator();
    this.#racingCarArray = [];
  }

  run() {
    this.#createRacingCars()
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
  // async #() {

  // }

}

export default RacingController;
