import * as play from './RacingCar.js';

class App {
  async play() {
    const carObjects = await play.getCarName();
    const tryCount = await play.getTryCount();
    for (let i = 0; i < tryCount; i++) {
      await play.moveCar(carObjects);
      play.printCarPosition(carObjects);
    }
    play.printWinner(carObjects);
  }
}

export default App;
