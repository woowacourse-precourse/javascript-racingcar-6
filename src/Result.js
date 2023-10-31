import { MissionUtils } from '@woowacourse/mission-utils';

class Result {
  FinalResult(carList) {
    let maxPosition = 0;
    let maxPositionCars = [];

    carList.forEach((car) => {
      if (car.position > maxPosition) {
        maxPosition = car.position;
        maxPositionCars = [car.name];
      } else if (car.position === maxPosition) {
        maxPositionCars.push(car.name);
      }
    });
    MissionUtils.Console.print(`최종 우승자 : ${maxPositionCars.join(', ')}`);
  }
}

export default Result;
