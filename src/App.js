import { MissionUtils } from '@woowacourse/mission-utils';
import { Car } from './Car.js';
class App {
  async play() {
    const carList = [];
    try {
      const carNames = await this.inputCarNames();
      const carNameList = carNames.split(',');
      carNameList.forEach(carName => {
        let newCar = new Car(carName);
        carList.push(newCar);
      });
    } catch (err) {
      MissionUtils.Console.print(err.message);
    } finally {
      console.log('');
    }
  }

  async inputCarNames() {
    try {
      const carNames = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );
      return carNames;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
