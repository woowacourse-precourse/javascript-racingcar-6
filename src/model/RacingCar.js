class RacingCar {
  #name;
  #displacement;

  constructor(name) {
    this.#name = name;
    this.#displacement = 0;
  }

  advance() {
    const randomNumer = MissionUtils.Random.pickNumberInRange(0, 9);
    
    if (randomNumer >= 4) {
      this.#displacement += 1;
    }
  }
}

export default RacingCar;