import { Console } from '@woowacourse/mission-utils';
import MoveCar from './MoveCar.js';

class App {
  async play() {
    const moveCar = new MoveCar();
    moveCar.carMoveCompare();
  }
}

const app = new App();
app.play();

export default App;