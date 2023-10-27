import { Console, Random } from "@woowacourse/mission-utils";

import Car from "./Car.js";

class App {
  constructor() {
    this.cars = [];
  }
  async play() {
    const userInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    //TODO: 예외사항
    const carsName = userInput.split(",");
    carsName.forEach((car) => {
      car = new Car(car);
      this.cars.push(car);
    });
    let tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    //TODO: 예외사항

    //TODO: 함수 분리
    while (tryCount--) {
      Console.print("실행 결과\n");
      this.cars.forEach((car) => {
        const randomValue = Random.pickNumberInRange(0, 9);
        if (randomValue >= 4) {
          car.moveForward(Number(randomValue));
        }
        car.printPosition();
      });
    }
    let maxDistance = -1;
    let winners = [];

    this.cars.forEach((car) => {
      if (car.getDistance() === maxDistance) {
        winners.push(car);
      }
      if (car.getDistance() > maxDistance) {
        winners = [];
        maxDistance = car.getDistance();
        winners.push(car);
      }
    });
    if (winners.length === 1) {
      Console.print(`최종 우승자 : ${winners[0].name}`);
      return;
    }
    const winnerNames = winners.map((car) => car.name).join(",");
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

(() => {
  const app = new App();
  app.play();
})();
export default App;
