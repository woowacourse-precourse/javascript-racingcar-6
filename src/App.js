import Make from './modules/Make.js';
import Print from './modules/Print.js';

class App {
  async play() {
    const racingInfo = await Make.racingInfo();
  }
}

export default App;
