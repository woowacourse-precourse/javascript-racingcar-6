import { Console } from '@woowacourse/mission-utils';
import CreateCarMoveCount from './RandomNumber.js';

class App {
  async play() {
    const number = new CreateCarMoveCount();
    const numberResult = number.createRandomNumber();
    Console.print(numberResult);
  }
}

const app = new App();
app.play();

export default App;