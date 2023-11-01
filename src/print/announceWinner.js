import { Console } from "@woowacourse/mission-utils";

const announceWinner = (array) => {
  const inputArray = array;
  const winnerString = inputArray.map((arrayItem) => arrayItem.car).join(", ");
  Console.print(`최종 우승자 : ${winnerString}`);
};

export default announceWinner;
