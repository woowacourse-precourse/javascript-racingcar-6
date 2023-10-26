import inputView from '../view/inputView.js';
import Car from '../Model/Car.js';
import Track from '../Model/Track.js';

export default class MainController {
  #car;

  #track;

  constructor() {
    this.#car = new Car();
    this.#track = new Track();
  }

  async preRace() {
    await this.handleCarsName();
    await this.handleFinalTrackCount();

    return console.log(this.#car.getCarsPosition(), this.#track.getFinalTrackCount());
  }

  async handleCarsName() {
    const input = await inputView.readCarName();

    return this.#car.setCarsName(input);
  }

  async handleFinalTrackCount() {
    const input = await inputView.readFinalTrackNum();

    return this.#track.setFinalTrackCount(input);
  }
}
