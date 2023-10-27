import { getCarName } from './domain/inputView.js';

class App {
  async play() {
    await getCarName();
  }
}

export default App;
