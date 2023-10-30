import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Validation from './Validation.js';

class App {
  carNames;

  async play() {
    const inputCarNames = await Input.getCarNamesFromUser();
    Validation.validateCarName(inputCarNames);
    this.carNames = inputCarNames;
    const inputGameCount = await Input.getGameCountFromUser();
  }
}

const app = new App();
app.play();

export default App;
