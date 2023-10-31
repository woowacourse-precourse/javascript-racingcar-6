import InputValue from './InputValue.js';

class App {
  async play() {
    const racingCar = await InputValue.carName();
    const moveCount = await InputValue.numberOfMoves();
  }
}

export default App;
