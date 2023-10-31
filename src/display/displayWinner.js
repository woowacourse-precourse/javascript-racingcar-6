import { Console } from "@woowacourse/mission-utils";

export default function displayRoundResult(racingCars) {
  let maxMileage = 0;
  const winners = [];

  racingCars.forEach(racingCar => {
    const totalMileage = racingCar.getTotalMileage();
    maxMileage = Math.max(maxMileage, totalMileage);
  })

  racingCars.forEach(racingCar => {
    const totalMileage = racingCar.getTotalMileage();
    if (totalMileage === maxMileage) {
      winners.push(racingCar.name);
    }
  })

  const winnerResult = winners.map((winner) => winner).join(', ');
  Console.print(`최종 우승자 : ${winnerResult}`);
}