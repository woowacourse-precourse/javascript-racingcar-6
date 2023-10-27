import ConvertInputTo from './modules/ConvertInputTo.js';

class App {
  async play() {
    const carList = await ConvertInputTo.carList();
  }
}

export default App;
