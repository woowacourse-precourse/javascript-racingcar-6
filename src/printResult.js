import { Console } from "@woowacourse/mission-utils";

const printResult = (player) => {
  Object.keys(player).map((key) => {
    Console.print(`${key} : ${player[key]}`);
  });
};

export default printResult;
