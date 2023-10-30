import Car from "../model/Car.js";
import { playerInput, carNameInput } from "../view/View.js";

export default class RacingCarController {
  #CarArr = [];

  constructor() {}

  async play() {
    const carNames = await carNameInput();
    const getPlayerInput = await playerInput();
  }
}
