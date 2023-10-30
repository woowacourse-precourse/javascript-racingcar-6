import { Console } from "@woowacourse/mission-utils";

class Car {
  moveOrStop(carName, randomNum) {
    // console.log('carName: ', carName, ', randomNum: ', randomNum);
    if (randomNum >= 4) {
      return 1;
    }
    if (randomNum < 4) {
      return 0;
    }
  }

  printCurrentPosition(carName, position) {
    return Console.print(carName + ': ' + '-'.repeat(position))
  }
}

export default Car;