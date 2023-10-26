import CreateCar from './CreateCar.js';
import InputNumber from './InputNumber.js';
import Racing from './Racing.js';
import Winner from './Winner.js';
class App {
  async play() {
    const car = await CreateCar();
    const n = await InputNumber();
    const racing = Racing(car, n);
    Winner(car, racing);
  }
}

export default App;
