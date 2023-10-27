import CarData from "../model/CarData.js";
import inputView from "../view/InputView.js";
import validation from "../utils/validation.js";

class Racing {
  #CarData;

  async startRace() {
    const input = await inputView.CarList();
    // validation.carNameValidCheck(input);
    this.#CarData = new CarData(input.split(","));
  }
}

export default Racing;
