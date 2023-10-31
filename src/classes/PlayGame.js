import { Console,MissionUtils } from "@woowacourse/mission-utils";

export default class PlayGame {

  progress(carList, gameCount) {
    const carMovingCountList = this.makeCarMovingCountList(carList);
    return this.repeatCount(gameCount, carMovingCountList);
  }

  showCount(count) {
    return '-'.repeat(count);
  }
  
  makeCarMovingCountList(carList) {
    Console.print("\n실행 결과");
    return carList.map((car) => ({ name: car, count: 0 }));

  }

  repeatCount(gameCount, carMovingCountList) {
    while (gameCount > 0) {
      carMovingCountList = this.moveCar(carMovingCountList);
      gameCount--;
    }
    return carMovingCountList;
  }

  moveCar(carMovingCountList) {
    carMovingCountList.forEach((car) => {
    const RandomNumber = MissionUtils.Random.pickNumberInRange(0, 9)
    car.count += RandomNumber >= 4 ? 1 : 0;
      Console.print(`${car.name} : ${this.showCount(car.count)}`);
    });
    Console.print("\n");
    return carMovingCountList;
  }
}
