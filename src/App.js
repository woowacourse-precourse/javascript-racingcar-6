import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Validation from './Validation.js';

class App {
  async play() {
    const carNames = await Input.getCarNamesFromUser();
    Validation.validateCarName(carNames);
  }
}

const app = new App();
app.play();

export default App;
