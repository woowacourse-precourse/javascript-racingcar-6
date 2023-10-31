import Car from '../Model/Car.js';
import Track from '../Model/Track.js';
import Winner from '../Model/Winners.js';
import inputView from '../view/inputView.js';
import outputView from '../view/outputView.js';

export default class Controller {
  #car;

  #track;

  #winner;

  constructor() {
    this.#car = new Car();
    this.#track = new Track();
    this.#winner = new Winner();
  }

  async preRace() {
    await this.handleCarsName();
    await this.handleFinalTrackCount();
    outputView.printResult();

    return this.startRace();
  }

  async handleCarsName() {
    const input = await inputView.readCarName();

    return this.#car.setCarsPosition(input);
  }

  async handleFinalTrackCount() {
    const input = await inputView.readFinalTrackNum();

    return this.#track.setFinalTrackCount(input);
  }

  startRace() {
    if (this.#track.compareTrackCount()) {
      this.#car.setCarsRelocation();

      return this.handleStatusOutput();
    }
    if (!this.#track.compareTrackCount()) {
      this.handleWinner();

      return 0;
    }
  }

  handleStatusOutput() {
    outputView.printTrack(this.#car.getCarsPosition());
    this.#track.plusCurrentTrackCount();

    return this.startRace();
  }

  handleWinner() {
    this.#winner.setWinners(this.#car.getCarsPosition());

    return outputView.printWinners(this.#winner.getWinner());
  }
}
