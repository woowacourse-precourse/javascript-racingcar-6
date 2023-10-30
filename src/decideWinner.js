import { Console } from "@woowacourse/mission-utils";

const decideWinner = (player) => {
  let max = 0;
  const winner = [];
  Object.keys(player).map((key) => {
    if (player[key].length > max) {
      max = player[key].length;
    }
  });
  Object.keys(player).map((key) => {
    if (player[key].length === max) {
      winner.push(key);
    }
  });
  Console.print(`최종 우승자 : ${winner.join(", ")}`);
};

export default decideWinner;
