import RacingCarValidatorValidator from "../validate/RacingCarValidator.js";
import InputView from "../view/InputView.js";
import RacingCar from "../model/RacingCar.js";

class RacingController {
  #inputView;
  // #outputView;
  #racingCarValidator;

  constructor() {
    this.#inputView = new InputView();
    // this.#outputView = new OutputView();
    this.#racingCarValidator = new RacingCarValidatorValidator();
  }

  run() {
    this.#createracingCars()
  }

  async #createracingCars() {
    const racingCarArray = [];

    const racingCarNameArray = await this.#inputView.readracingCarNames();
    if (this.#racingCarValidator.eachracingCarName(racingCarNameArray)) {
      racingCarNameArray.forEach(element => {
        racingCarArray.push(new RacingCar(element));
      });
    };

    console.log(racingCarArray);
  }
}

export default RacingController;
