import { MissionUtils } from "@woowacourse/mission-utils";

export function result(cars){
  let maxMove = cars[0].move;
  let maxCar = [];

  for(const car of cars){
    if(car.move > maxMove){
      maxMove = car.move
      maxCar = [car.name]
    }else if(car.move == maxMove){
      maxCar.push(car.name)
    }
  }

  // 쉼표로 묶어 출력
  MissionUtils.Console.print(maxCar.join(','));
} 