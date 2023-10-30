/**
 * @typedef {import('./RacingCar').default} RacingCar
 */

class RacingGame {
  /**
   *
   * @param {RacingCar[]} cars
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
}

export default RacingGame
