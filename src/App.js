import ConvertInputTo from './modules/ConvertInputTo.js';
import Print from './modules/Print.js';

class App {
  async play() {
    const carList = await ConvertInputTo.carList();
    const gameCount = await ConvertInputTo.gameCount();
    const positionList = new Array(carList.length).fill(0);

    Print.beforeRacingMessage();
  }
}

export default App;
