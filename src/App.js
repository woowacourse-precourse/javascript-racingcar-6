/* eslint-disable import/extensions */
import gameController from './Controller/RacingCarGameController.js';

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    await gameController();
  }
}

export default App;
