import OutputView from '../views/OutputView.js'
import InputView from '../views/InputView.js'
import RacingCar from '../model/RacingCar.js'
import RacingGame from '../model/RacingGame.js'

/**
 * @typedef {import('../model/RacingGame').default} RacingGame
 */

class RacingGameController {
  /**
   * @type {RacingGame}
   */
  #racingGame

  async start() {
    await this.#setRacingGame()
    await this.#gameProgress()
    this.#gameWinner()
  }

  async #setRacingGame() {
    const carNameList = await InputView.readCarNames()
    const carList = carNameList.map((carName) => new RacingCar(carName))
    this.#racingGame = new RacingGame(carList)
  }

  async #gameProgress() {
    const tryCount = await InputView.readTryCount()
    OutputView.printResult()

    Array.from({ length: tryCount }).forEach(this.#oneTimeresult.bind(this))
  }

  #oneTimeresult() {
    this.#racingGame.tryOneTime()
    this.#racingGame.getRacingCars().forEach((racingCar) => {
      OutputView.printCarResult(racingCar.getName(), racingCar.getDistance())
    })

    OutputView.printNewLine()
  }

  #gameWinner() {
    const winnerNameList = this.#racingGame.getWinner().map((racingCar) => racingCar.getName())
    OutputView.printWinner(winnerNameList)
  }
}

export default RacingGameController
