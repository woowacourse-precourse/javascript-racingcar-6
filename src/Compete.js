import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";

export function compete(carNames, round) {
  //질문하기
  // for (let car of carNames) {
  //   car = new Car(car);
  //   // console.log(car);
  //   // console.log(car.runningResult);
  // }

  let cars = carNames.map((name) => new Car(name));

  for (let i = 0; i < round; i++) {
    MissionUtils.Console.print(`\n`);
    for (let car of cars) {
      car.runningResult = car.runOrNot(car.runningResult);
      MissionUtils.Console.print(`${car.name} : ${car.runningResult}`);
    }
  }

  let winner = [];
  let array = [];

  for (let car of cars) {
    array.push(car.runningResult.length);
  }

  for (let car of cars) {
    if (car.runningResult.length == Math.max(...array)) {
      winner.push(car.name);
    }
  }

  MissionUtils.Console.print("\n실행 결과");

  MissionUtils.Console.print(`최종 우승자 : ${winner}`);
}
