import { getCarName, getRoundNum } from './GetInput.js';
import compete from './Compete.js';

class App {
  async play() {
    const carNames = await getCarName();
    const round = await getRoundNum();
    compete(carNames, round);
  }
}

// test 용 코드:
// const myApp = new App();
// myApp.play();

export default App;
