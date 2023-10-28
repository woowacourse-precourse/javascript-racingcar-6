import { Console } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "./message.js";

export default async function inputUser() {
  const carMap = new Map();
  const carName = await Console.readLineAsync(GAME.INPUT_CAR_NAME);
  const carArr = carName.split(",");

  carArr.map((car) => {
    if (car.length > 5) {
      throw new Error(ERROR.LENGTH);
    } else {
      carMap.set(car, 0);
    }
  });

  const repeatCount = await Console.readLineAsync(GAME.INPUT_REPEAT_COUNT);
  if (isNaN(repeatCount)) throw new ERROR(ERROR.NUMBER);

  return { carMap, repeatCount };
}
