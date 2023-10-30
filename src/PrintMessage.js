import { MissionUtils } from "@woowacourse/mission-utils";
import { WINNER_MESSAGE } from "./Messages.js";

export function printForwardCar(carName, forwardCount) {
  let dash = '';
  for (let index = 0; index < forwardCount; index += 1) {
    dash += '-';
  }
  MissionUtils.Console.print(`${carName} : ${dash}`);
}

export function printWinner(forwardCarData) {
  Object.entries(forwardCarData)
  const maxValue = Math.max(...Object.values(forwardCarData));
  const winner = Object.keys(forwardCarData).filter(key => forwardCarData[key] === maxValue).join(', ');
  MissionUtils.Console.print(`${WINNER_MESSAGE} : ${winner}`);
}