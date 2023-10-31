import { Console } from "@woowacourse/mission-utils";
import { Car } from "./car.js";
import { TEXT, ERROR } from "./text.js";

class App {
  async play() {
    const carNamesInput = await Console.readLineAsync(TEXT.CAR_NAMES);
    const carNames = carNamesInput.split(',');
    this.checkCarNames(carNames);

    const tryCountInput = await Console.readLineAsync(TEXT.ATTEMPTS_NUMBER);
    const tryCount = parseInt(tryCountInput);
    if (isNaN(tryCount)) { throw new Error(ERROR.MAX_LENGTH); }

    const cars = carNames.map((name) => new Car(name));

    Console.print("\n실행결과");
    this.carMoves(tryCount, cars);

    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === maxPosition).map((car) => car.name);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
    
  }

  checkCarNames(carNames){// 자동차 이름 입력 검증
    for (const carName of carNames){
      if(carName.length > 5){ throw new Error(ERROR.NAN)}
    }
  }

  carMoves(tryCount, cars){ // 레이싱 실행
    for (let i = 0; i < tryCount; i++) {
      for (const car of cars) {
        car.move();
      }
      this.printCarPositions(cars);
    }
  } 

  printCarPositions(cars) { // 게임 진행 상황 출력
    for (const car of cars) {
      let carPositionString = '-'.repeat(car.position);
      Console.print(`${car.name} : ${carPositionString}`);
    }
    Console.print('\n');
  }
}

export default App;
