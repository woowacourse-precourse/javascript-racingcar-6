import { Console } from "@woowacourse/mission-utils";
import CAR from "./constants/constant";

class Result {
  FinalResult(carList) {
    let maxPosition = CAR.position.default;
    let maxPositionCars = [];

    carList.forEach((car) => {
      if (car.position > maxPosition) {
        maxPosition = car.position;
        maxPositionCars = [car.name];
      } else if (car.position === maxPosition) {
        maxPositionCars.push(car.name);
      }
    });
    Console.print(`최종 우승자 : ${maxPositionCars.join(CAR.name.separator)}`);
  }
}

export default Result;
