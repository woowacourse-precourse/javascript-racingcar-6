import { Console } from '@woowacourse/mission-utils';
import strings from './constants.js';
import CreateCarName from './CreateCarName.js';
import RacingCar from './RacingCar.js';

class App {
  constructor() {
    this.carArray = [];
  }

  async play() {
    const inputName = await Console.readLineAsync(strings.ASK_NAME);
    const namingCar = new CreateCarName();
    this.carArray = namingCar.carName(inputName);

    const inputNumber = await Console.readLineAsync(strings.ASK_NUMBER);
    const race = new RacingCar();
    race.playRace(inputNumber, this.carArray);
  }
}
export default App;
