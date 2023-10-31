import { Console } from "@woowacourse/mission-utils";
import checkWinner from "./checkWinner.js";

function printResult(cars) {
  const winnerList = checkWinner(cars);
  Console.print("최종 우승자 : " + winnerList.join(","));
}

export default printResult;
