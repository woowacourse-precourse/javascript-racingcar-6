import Combiner from './Combiner/Combiner.js';
import Receiver from './Receiver/Receiver.js';
import Validator from './Validator/Validator.js';

class App {
  #receiver = new Receiver();

  #validator = new Validator();

  #carNames;

  async play() {
    this.#carNames = await this.#receiver.receiveCarNames();

    this.#validator.checkValidCarsName(Combiner.combineArray(this.#carNames));
  }
}

export default App;

const app = new App();

app.play();
