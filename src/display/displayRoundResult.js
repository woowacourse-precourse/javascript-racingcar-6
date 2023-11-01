import { Console } from "@woowacourse/mission-utils";

/**
 * 한 라운드를 마친 racingCars의 라운드 결과를 출력한다.
 * 
 * @param {list} racingCars 
 */
export default function displayRoundResult(racingCars) {
  racingCars.forEach(racingCar => {
    const name = racingCar.name;
    const movingDistance = racingCar.movingDistance;

    Console.print(`${name} : ${movingDistance}`);
  })
}