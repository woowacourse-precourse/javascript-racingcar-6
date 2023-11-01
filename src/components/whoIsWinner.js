import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "../pages/text.js";

export default function whoIsWinner(CARS) {
  const goValues = CARS.map((car) => car.go);
  const maxNumber = Math.max(...goValues);

  const winners = CARS.filter((car) => car.go === maxNumber);
  const winnerNames = winners.map((car) => car.name).join(", ");

  return winnerNames;
}
