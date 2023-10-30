import RacingGameController from './controller/RacingGameController.js'

class App {
  async play() {
    const racingGameController = new RacingGameController()

    await racingGameController.start()
  }
}

export default App
