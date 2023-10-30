import { CarNames } from './input/CarNames.js';
import { getTry } from './input/Try.js';

class App {
  async play() {
    const carInput = new CarNames();
    const carNames = await carInput.getName();
    const tryInput = await getTry();
  }
}
export default App;
