import InputValue from './InputValue.js';

class App {
  async play() {
    const inputValue = new InputValue();
    const carNameArr = await inputValue.carName();
    const count = await inputValue.moveCount();
  }
}

export default App;
