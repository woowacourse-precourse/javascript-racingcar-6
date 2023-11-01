import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  async receiveCarNames() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = carNamesInput.split(',');
    return carNames;
  }

  validateCarNames(carNames){
    carNames.forEach(carName => {
      if (carName.length > 5){
        throw new Error("[ERROR] 자동차 이름의 길이가 너무 깁니다.");
      }
    });
  }

  generateCars(carNames) {
    this.cars = [];
    carNames.forEach(carName => {
      const car = new Car(carName, "");
      this.cars.push(car)
    });
  }

  async receiveGameCount() {
    const gameCountInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    const gameCount = parseInt(gameCountInput, 10);
    return gameCount;
  }

  async play() {
    const carNames = await this.receiveCarNames();
    this.validateCarNames(carNames)
    this.generateCars(carNames);
    const gameCount = await this.receiveGameCount();
  }
}

const app = new App();
app.play();

export default App;
