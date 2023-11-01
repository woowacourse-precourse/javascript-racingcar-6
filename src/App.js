import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  async receiveCarNames() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = carNamesInput.split(',');
    return carNames;
  }

  generateCars(carNames) {
    this.cars = [];
    carNames.forEach(carName => {
      const car = new Car(carName, "");
      this.cars.push(car)
    });
  }

  async play() {
    const carNames = await this.receiveCarNames();
    this.generateCars(carNames);
  }
}

const app = new App();
app.play();

export default App;
