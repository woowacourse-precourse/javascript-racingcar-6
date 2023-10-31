import { Console } from "@woowacourse/mission-utils";

export default class Display {
  displayRoundResults(results) {
    for (let name in results) {
      Console.print(`${name} : ${results[name]}`);
    }
    Console.print("\n");
  }

  displayWinners(results) {
    const maxDistance = Math.max(...Object.values(results).map(result => result.length));
    const winners = Object.keys(results).filter(name => results[name].length === maxDistance);
    Console.print(`최종 우승자: ${winners.join(", ")}`);
  }
}