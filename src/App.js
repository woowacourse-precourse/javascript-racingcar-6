import { CarInput } from './userInput/car/CarInput';

class App {
  async play() {
    const carInput = new CarInput();

    const carNames = await carInput.getName();
  }
}
export default App;
