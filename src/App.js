import InputView from "./view/InputView.js";

class App {
  async play() {
    const input = await InputView.requestCars();
    console.log(input);
    const number = await InputView.requestNumber();
    console.log(number);
  }
}

export default App;
