import { MissionUtils } from "@woowacourse/mission-utils";

const carMoveStorage = {}

export function carMoveOrStop(carname, determinatednumber) {
  carMoveStorage[carname] = "";
  if (determinatednumber >= 4) {
    carMoveStorage[carname] += "-";
  }
  MissionUtils.Console.print(`${carname} : ${carMoveStorage[carname]}`);
}