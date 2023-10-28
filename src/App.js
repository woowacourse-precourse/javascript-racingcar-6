import InputValue from './InputValue.js';

class App {
  async play() {
    const carNameArr = await InputValue.carName();
    const count = await InputValue.moveCount();
  }
}

export default App;
