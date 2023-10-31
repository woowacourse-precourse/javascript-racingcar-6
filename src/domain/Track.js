class Track {
  #users;

  #currentLap = 1;

  #finalLap;

  constructor(users, lap) {
    this.#users = users;
    this.#finalLap = lap;
  }

  getUsers() {
    return this.#users;
  }

  getCurrentLap() {
    return this.#currentLap;
  }

  getFinalLap() {
    return this.#finalLap;
  }

  processLap() {
    this.#users.forEach((user) => {
      user.accelerate();
    });
    this.#currentLap += 1;
  }

  isEnd() {
    return this.#currentLap === this.#finalLap;
  }
}

export default Track;
