import { Console } from "@woowacourse/mission-utils";

const announceWinner = (array) => {
  const input_array = array;
  const winner_string = input_array
    .map((array_item) => array_item.car)
    .join(", ");
  Console.print(`최종 우승자 : ${winner_string}`);
};

export default announceWinner;
