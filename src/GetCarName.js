import { Console } from "@woowacourse/mission-utils";
import * as message from "./Message.js";

export default async function getCarName() {
  const carNames = await Console.readLineAsync(`${message.GET_CAR_NAME}`);
  const carNameArray = carNames.split(",");
  if (validationCarName(carNameArray)) {
    return carNameArray;
  } else {
    throw Error(`${message.ERROR_INVALID_NAME}`);
  }
}

function validationCarName(carArray) {
  return carArray.every((car) => car.length <= 5 && car.length > 0);
}
