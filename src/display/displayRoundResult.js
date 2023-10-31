import { Console } from "@woowacourse/mission-utils";

export default function displayRoundResult(racingCars) {
  racingCars.forEach(racingCar => {
    const name = racingCar.name;
    const movingDistance = racingCar.movingDistance;
    Console.print(`${name} : ${movingDistance}`);
  })
  Console.print('\n');
}