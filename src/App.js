import { Console } from "@woowacourse/mission-utils";
import { Car } from "./car.js";
import { TEXT, ERROR } from "./text.js";

class App {
  async play() {
    const pushcarName = await Console.readLineAsync(TEXT.CARSNAME);
    const carsname = pushcarName.split(',');
    this.checkcarsname(carsname);

    const pushtrycount = await Console.readLineAsync(TEXT.NUMBER_ATTEMPT);
    const tryCount = parseInt(pushtrycount);
    if (isNaN(tryCount)) { throw new Error(ERROR.LENGTH_EXCEED); }

    const cars = carsname.map((name) => new Car(name));

    Console.print("\n실행결과");
    this.carmoving(tryCount, cars);

    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === maxPosition).map((car) => car.name);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
    
  }

  checkcarsname(carsname){// 자동차의 이름 입력하기
    for (const carName of carsname){
      if(carName.length > 5){ throw new Error(ERROR.NAN)}
    }
  }

  carmoving(tryCount, cars){ // 레이스 시작!
    for (let i = 0; i < tryCount; i++) {
      for (const car of cars) {
        car.move();
      }
      this.printCarPositions(cars);
    }
  } 

  printCarPositions(cars) { // 레이스 상황 출력
    for (const car of cars) {
      let carPositionString = '-'.repeat(car.position);
      Console.print(`${car.name} : ${carPositionString}`);
    }
    Console.print('\n');
  }
}

export default App;