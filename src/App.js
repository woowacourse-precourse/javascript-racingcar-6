import ConvertInputTo from './modules/ConvertInputTo.js';

class App {
  async play() {
    const carList = await ConvertInputTo.carList();
    const gameCount = await ConvertInputTo.gameCount();
  }
}

export default App;
