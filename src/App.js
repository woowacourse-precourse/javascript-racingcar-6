import { getCarArrFromInputValue, getTryNumber } from './utils.js';

class App {
  async play() {
    let carArr = await getCarArrFromInputValue();
    let tryNum = await getTryNumber();
  }
}

export default App;
