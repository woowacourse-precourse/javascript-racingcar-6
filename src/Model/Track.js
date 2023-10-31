export default class Track {
  #finalTrackCount;

  #currentTrackCount;

  constructor() {
    this.#finalTrackCount = 0;
    this.#currentTrackCount = 0;
  }

  setFinalTrackCount(input) {
    this.#finalTrackCount = Number(input);
  }

  plusCurrentTrackCount() {
    this.#currentTrackCount += 1;
  }

  compareTrackCount() {
    if (this.#currentTrackCount < this.#finalTrackCount) {
      return true;
    }
    if (this.#currentTrackCount === this.#finalTrackCount) {
      return false;
    }
  }
}
