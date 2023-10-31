import { getCarName } from './domain/inputView.js';
// import { makeRandomNumber } from './domain/NumberGenerator.js';

class App {
  async play() {
    await getCarName();
  }
}

export default App;
