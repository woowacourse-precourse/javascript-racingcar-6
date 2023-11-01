import { Console } from "@woowacourse/mission-utils";
import { getInputCarsName } from "./user/getInputCarsName.js";
import { progressGame } from "./util/progressGame.js";
import { getRandomCarsNumber } from "./getRandomCarsNumber.js";
import { calculatedResult } from "./util/calculatedResult.js";
import { getInputPlayCount } from "./user/getInputPlayCount.js";

export const racingGame = async () => {
  const carsNameArray = await getInputCarsName();
  const playCount = await getInputPlayCount();

  Console.print(`실행 결과`);

  for (let i = 1; i <= playCount; i++) {
    const carsRandomArray = getRandomCarsNumber(carsNameArray.length);

    progressGame(carsNameArray, carsRandomArray);

    Console.print(" ");
  }

  const result = calculatedResult(carsNameArray);

  Console.print(
    `최종 우승자 : ${result.length !== 1 ? result.join(", ") : result[0]}`
  );
};
