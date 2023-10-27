import ConvertInputTo from './modules/ConverInputTo.js';

class App {
  async play() {
    const carList = await ConvertInputTo.carList();
  }
}

export default App;
