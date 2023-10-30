import { getCarArrFromInputValue } from './utils.js';

class App {
  async play() {
    let carArr = await getCarArrFromInputValue();
  }
}

export default App;
