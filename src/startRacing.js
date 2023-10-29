import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { GAME } from "./message.js";

export default function startGame(carMap, repeatCount) {
  for (let i = 0; i < repeatCount; i++) {
    for (let [key, value] of carMap) {
      if (checkAdvanceCar()) {
        carMap.set(key, value + 1);
      }
    }
    printOneStep(carMap);
  }

  let maxAdvance = 0;
  for (let value of carMap.values()) {
    maxAdvance = value > maxAdvance ? value : maxAdvance;
  }
  SearchWinner(carMap, maxAdvance);
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

function SearchWinner(carMap, maxAdvance) {
  let winners = [];
  for (let [key, value] of carMap) {
    if (maxAdvance === value) {
      winners.push(key);
    }
  }
  let racingWinner = winners.map((winner) => winner).join(", ");

  Console.print(GAME.RESULT + racingWinner);
}
