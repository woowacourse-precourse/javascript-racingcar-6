import InputValue from './InputValue.js';
import RacingGame from './RacingGame.js';

class App {
  async play() {
    const racingCar = await InputValue.carName();
    const moveCount = await InputValue.numberOfMoves();

    for (let i = 0; i < moveCount; i++) {
      RacingGame.moveCar(racingCar);
    }
  }
}

export default App;
