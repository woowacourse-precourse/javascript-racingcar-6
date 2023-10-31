import { MissionUtils } from "@woowacourse/mission-utils";
import Car from './car.js';
import race from './race.js';
import victory from './victory.js';


class App {
  async play() {
    const carNamesInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): "
    );
    const carNames = carNamesInput.split(',').map(name => name.trim());
    const cars = carNames.map(name => new Car(name));

    this.race();
    this.victory();
  }
}

export default App;