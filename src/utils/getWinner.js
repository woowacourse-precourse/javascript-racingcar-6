import { Console } from "@woowacourse/mission-utils"

export const getWinner = (carObject) => {
  const maxRace = Math.max(...carObject.map((car) => car.race.length));
  const winnerArray = carObject
    .filter((car) => car.race.length === maxRace)
    .map((car) => car.name);

  Console.print(`최종 우승자 : ${winnerArray.join(", ")}`);
};
