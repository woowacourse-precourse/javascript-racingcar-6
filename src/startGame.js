import { MissionUtils, Console } from "@woowacourse/mission-utils";

export default function startGame(carMap, repeatCount) {
  for (let i = 0; i < repeatCount; i++) {
    for (let [key, value] of carMap) {
      if (checkAdvanceCar()) {
        carMap.set(key, value + 1);
      }
    }

    printOneStep(carMap);
  }
}

function checkAdvanceCar() {
  let randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

  if (randomNumber >= 4) return true;
  return false;
}

function printOneStep(carMap) {
  for (let [key, value] of carMap) {
    let dash = "";
    for (let i = 0; i < value; i++) {
      dash += "-";
    }

    Console.print(key + " : " + dash);
  }
  Console.print("");
}
