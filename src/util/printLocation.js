import { Console } from "@woowacourse/mission-utils";

function printLocation(cars) {
  for (let i = 0; i < cars.length; i++) {
    Console.print(cars[i].name + " : ");
    for (let j = 0; j < cars[i].curLocation; j++) {
      Console.print("-");
    }
  }
  return;
}

export default printLocation;
