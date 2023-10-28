class RacingCar {
  #name;
  #displacement;
  #dice;

  constructor(name) {
    this.#name = name;
    this.#displacement = 0;
    this.#dice = 0;
    console.log(`${name} 생성됨`)
  }
}

export default RacingCar;