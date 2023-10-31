import { Console } from "@woowacourse/mission-utils";

function printLocation(cars) {
  for (let i = 0; i < cars.length; i++) {
    Console.print(cars[i].name + " : " + cars[i].distance);
  }
  return;
}

export default printLocation;
