import { MissionUtils } from "@woowacourse/mission-utils";

export function printForwardCar(carName, forwardCount) {
  let dash = '';
  for (let index = 0; index < forwardCount; index += 1) {
    dash += '-';
  }
  MissionUtils.Console.print(`${carName} : ${dash}`);
}