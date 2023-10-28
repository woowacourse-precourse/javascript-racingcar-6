import getCarNames from './input/getCarNames.js';
import getRaceNumber from './input/getRaceNumber.js';
import getMoveCount from './game/getMoveCount.js';

class App {
  async play() {
    this.cars = await getCarNames();
    this.raceNumber = await getRaceNumber();
    this.moveCount = getMoveCount(this.cars, this.raceNumber);
  }
}

export default App;
