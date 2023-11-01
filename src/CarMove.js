import { MissionUtils } from "@woowacourse/mission-utils";
import { carMoveStorage } from "./CarMoveStorage.js";

export function carMoveOrStop(carname, determinatednumber) {
  if (determinatednumber >= 4) {
    carMoveStorage[carname] += "-";
  }
  MissionUtils.Console.print(`${carname} : ${carMoveStorage[carname]}`);
}