import InputValue from './InputValue.js';

class App {
  async play() {
    const carNameArr = await InputValue.carName();
    const moveCount = await InputValue.moveCount();
  }
}

export default App;
