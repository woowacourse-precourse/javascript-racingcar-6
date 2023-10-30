import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';

class App {
  async play() {
    const carNames = await Input.getCarNamesFromUser();
  }
}

const app = new App();
app.play();

export default App;
