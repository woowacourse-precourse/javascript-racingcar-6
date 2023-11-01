const Car = require('./models/Car');
const { Console, Random } = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.cars = [];
  }

  isValidName(name) {
    if(!name || name.length > 5 || name.trim() === "") {
        return false;
    }
    return true;
  }

  async play() {
    const carNamesInput = await Console.readLineAsync('자동차 이름을 입력해주세요. (예: pobi,woni,jun)');
    const carNames = carNamesInput.split(",");
    
    for(let name of carNames) {
        if(!this.isValidName(name)) {
            throw new Error("[ERROR] Invalid name");
        }
    }

    const tryCountInput = await Console.readLineAsync('시도할 횟수는 몇회인가요?');
    const tryCount = parseInt(tryCountInput, 10);

    this.cars = carNames.map(name => new Car(name));

    for (let i = 0; i < tryCount; i++) {
      this.moveCars();
      this.showRoundResult();
    }

    this.showFinalResult();
  }

  moveCars() {
    this.cars.forEach(car => {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        car.move();
      }
    });
  }

  showRoundResult() {
    this.cars.forEach(car => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });
  }

  showFinalResult() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    const winners = this.cars.filter(car => car.position === maxPosition).map(car => car.name);
    Console.print(`최종 우승자: ${winners.join(', ')}`);
  }
}

module.exports = App;
