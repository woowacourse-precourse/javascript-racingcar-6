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
    return carList.map((e) => [e, 0]);
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
    car[1] += MissionUtils.Random.pickNumberInRange(0, 9) >= 4 ? 1 : 0;
      Console.print(car[0] + " : " + this.showCount(car[1]));
    });
    Console.print("\n");
    return carMovingCountList;
  }
}
