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

  getFinalTrackCount() {
    return this.#finalTrackCount;
  }
}
