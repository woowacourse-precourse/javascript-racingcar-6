import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGES } from "../constants/constants.js";

/**
 * 모든 라운드를 마친 racingCars의 최종 승자를 출력한다.
 * 
 * @param {list} racingCars 
 */
export default function displayWinner(racingCars) {
  let maxMileage = 0;
  const winners = [];

  // get maxMileage
  racingCars.forEach(racingCar => {
    const totalMileage = racingCar.getTotalMileage();

    maxMileage = Math.max(maxMileage, totalMileage);
  })

  // find winner using maxMileage
  racingCars.forEach(racingCar => {
    const totalMileage = racingCar.getTotalMileage();
    
    if (totalMileage === maxMileage) {
      winners.push(racingCar.name);
    }
  }) 

  const winnerResult = winners.map((winner) => winner).join(', ');
  Console.print(GUIDE_MESSAGES.winnerGuide + ` : ${winnerResult}`);
}