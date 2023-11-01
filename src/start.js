import { Console } from "@woowacourse/mission-utils";
import { carRace } from "./carRace";

/**
 * 게임 시작 함수
 * @param {*} cars 
 * @param {*} attempts 
 * @returns 우승자 결과
 */
export const start = (cars, attempts) => {

    const race = carRace(cars, attempts);
    let result = race.next();

    while (!result.done) {
      Console.print(result.value.join('\n'));
      result = race.next();
    }

    const maxDistance = Math.max(...cars.map(car => car.position.length));
    const winners = cars.filter(car => car.position.length === maxDistance).map(car => car.name);
    if (winners.length === 1) {
      return `최종 우승자 : ${winners}`;
    } else {
      return `최종 우승자 : ${winners.join(', ')}`;
    }
  }