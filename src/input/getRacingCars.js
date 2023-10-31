import { Console } from "@woowacourse/mission-utils";
import validateCarNames from "../validator/validateCarNames.js";
import RacingCar from "../classes/RacingCar.js";

function makeCarsByNames(carNames) {
  const racingCars = [];

  for (const carName of carNames) {
    const racingCar = new RacingCar(carName);
    racingCars.push(racingCar);
  }
  
  return racingCars;
}

/**
 * 사용자 입력을 받아 쉼표를 기준으로 차량을 구분하고, 차량 목록을 반환한다.
 * 스페이스 등의 공백이 있을 경우 제거한다.
 * 
 * @param {string} carNames
 * @returns {list<RacingCar>}
 */

export default async function getRacingCars() {
  const userInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  const carNamesWithoutSpace = String(userInput).replace(/(\s*)/g, '');
  const carNames = carNamesWithoutSpace.split(",");

  validateCarNames(carNames);

  const racingCars = makeCarsByNames(carNames);

  return racingCars;
}

// console.log(await getCarNames());