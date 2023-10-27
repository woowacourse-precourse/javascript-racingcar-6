import ConvertInputTo from './modules/ConvertInputTo.js';

class App {
  async play() {
    const carList = await ConvertInputTo.carList();
    const gameCount = await ConvertInputTo.gameCount();
    const positionList = new Array(carList.length).fill(0);
  }
}

export default App;
