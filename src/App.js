import CarName from './CarName.js';

class App {
  async play() {
    const carName = new CarName();
    await carName.start();
  }
}

export default App;
