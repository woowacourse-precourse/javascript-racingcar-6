import CarData from "../model/CarData.js";
import inputView from "../view/InputView.js";

class Racing {
  #CarData;

  async startRace() {
    const input = await inputView.CarList();
    this.#CarData = new CarData(input.split(","));
  }
}

export default Racing;
