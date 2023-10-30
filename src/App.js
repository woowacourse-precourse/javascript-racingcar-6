import { CarInput } from './userInput/car/CarInput.js';
import { getTry } from './userInput/try/Try.js';

class App {
  async play() {
    const carInput = new CarInput();
    const carNames = await carInput.getName();
    const tryInput = await getTry();
  }
}
export default App;
