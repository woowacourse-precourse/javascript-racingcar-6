import { Console } from "@woowacourse/mission-utils";

function printRacingResult(carName, forwardNumber) {
  const winners = [];
  let highestNumber = forwardNumber[0].length;
  let carCount = carName.length;

  for (let i = 1; i < carCount; i++) {
    if (highestNumber < forwardNumber[i].length) {
      highestNumber = forwardNumber[i].length;
    }
  }

  for (let i = 0; i < carCount; i++) {
    if (highestNumber === forwardNumber[i].length) {
      winners.push(carName[i]);
    }
  }

  const result = winners.join(", ");

  Console.print(`최종 우승자 : ${result}`);
}

export default printRacingResult;
