import InputValue from './InputValue.js';

class App {
  async play() {
    const inputValue = new InputValue();
    const carNameArr = await inputValue.carName();
  }
}

export default App;
