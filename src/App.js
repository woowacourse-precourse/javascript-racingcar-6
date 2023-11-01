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
    const gameCountInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.validateGameCountInput(gameCountInput)
    const gameCount = parseInt(gameCountInput, 10);
    return gameCount;
  }

  validateGameCountInput(gameCountInput) {
    if (isNaN(gameCountInput)){
      throw new Error("[ERROR] 숫자 형식의 입력이 아닙니다.");
    }
  }

  shouldUpdateDistanceOnAdvance() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber > 4) {
      return true;
    }
    return false;
  }

  updateDistancePerRound() {
    this.cars.forEach(car => {
      if(this.shouldUpdateDistanceOnAdvance()){
        car.distance += '-';
      }
    });
  }

  printRoundResults() {
    this.cars.forEach(car => {
      Console.print(car.getGameResult());
    });
    Console.print('\n');
  }

  displayGameResultsForRounds(gameCount) {
    Console.print('\n실행 결과');
    for (let i = 0; i < gameCount; i++) {
      this.updateDistancePerRound();
      this.printRoundResults();
    }
  }

  getFinalWinnerDistance() {
    let maxDistance = '';
    this.cars.forEach(car => {
      if (maxDistance.length < car.distance.length){
        maxDistance = car.distance;
      }
    });
    return maxDistance
  }

  displayFinalWinner() {
    let maxDistance = this.getFinalWinnerDistance();
    this.winners = [];
    this.cars.forEach(car => {
      if (maxDistance === car.distance) {
        this.winners.push(car.name);
      }
    });
    Console.print(`최종 우승자 : ${this.winners.join(', ')}`);
  }

  async play() {
    const carNames = await this.receiveCarNames();
    this.validateCarNames(carNames)
    this.generateCars(carNames);
    const gameCount = await this.receiveGameCount();
    this.displayGameResultsForRounds(gameCount);
    this.displayFinalWinner();
  }
}

const app = new App();
app.play();

export default App;
