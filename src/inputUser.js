import { Console } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "./message.js";

export default async function inputUser() {
  const carName = await Console.readLineAsync(GAME.INPUT_CAR_NAME);
  const carArr = carName.split(",");
  carArr.map((car) => {
    if (car.length > 5) {
      throw new Error(ERROR.LENGTH);
    }
  });

  const repeatCount = await Console.readLineAsync(GAME.INPUT_REPEAT_COUNT);
  if (isNaN(repeatCount)) throw new ERROR(ERROR.NUMBER);

  return { carArr, repeatCount };
}
