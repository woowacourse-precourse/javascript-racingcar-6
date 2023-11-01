import Combiner from './Combiner/Combiner.js';
import Receiver from './Receiver/Receiver.js';
import Validator from './Validator/Validator.js';

class App {
  #receiver = new Receiver();

  #validator = new Validator();

  #carNames;

  #tryNum;

  async play() {
    this.#carNames = await this.#receiver.receiveCarNames();

    this.#validator.checkValidCarsName(Combiner.combineArray(this.#carNames));

    this.#tryNum = await this.#receiver.receiveGameTryNum();

    Validator.checkIsPostiveNum(this.#tryNum);
  }
}

export default App;
