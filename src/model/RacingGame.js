/**
 * @typedef {import('./RacingCar').default} RacingCar
 */

class RacingGame {
  /**
   *
   * @param {RacingCar[]} racingCars
   */
  constructor(racingCars) {
    this.racingCars = racingCars
  }

  tryOneTime() {
    this.racingCars.forEach((racingCar) => racingCar.tryMove())
  }

  getWinner() {
    const maxDistance = Math.max(...this.racingCars.map((racingCar) => racingCar.getDistance()))
    return this.racingCars.filter((racingCar) => racingCar.getDistance() === maxDistance)
  }

  getRacingCars() {
    return this.racingCars
  }
}

export default RacingGame
