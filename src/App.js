/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import Cars from './Cars.js';
import PlayCount from './PlayCount.js';
import Game from './Game.js';

class App {
  async play() {
    const cars = new Cars();
    const playCount = new PlayCount();

    try {
      const carNames = await cars.getCarsNames();
      const count = await playCount.getPlayCount();
      const game = new Game(carNames, count);
      game.playGame();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
