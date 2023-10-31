import { Console } from "@woowacourse/mission-utils";
import { Car } from "./car.js";

class App {
  async play() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = carNamesInput.split(',');
    this.checkCarNames(carNames);
    //Console.print(carNames);

    const tryCountInput = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const tryCount = parseInt(tryCountInput);
    if (isNaN(tryCount)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    //Console.print(tryCountInput);

    const cars = carNames.map((name) => new Car(name));
    //Console.print(cars);
    Console.print("\n실행결과");
    for (let i = 0; i < tryCount; i++) {
      for (const car of cars) {
        car.move();
      }
      this.printCarPositions(cars);
    }

    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === maxPosition).map((car) => car.name);

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
    
  }

  checkCarNames = (carNames) => {
    for (const carName of carNames){
      if(carName.length > 5){ throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.')}
    }
  }

  printCarPositions(cars) {
    for (const car of cars) {
      let carPositionString = '-'.repeat(car.position);
      Console.print(`${car.name} : ${carPositionString}`);
    }
    Console.print('\n');
  }
}

export default App;
