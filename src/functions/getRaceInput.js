import { Console } from "@woowacourse/mission-utils";
import { ERROR, MESSAGE } from "../constants/constants.js";

const getRaceCars = async () => {
  const cars = [];
  const raceCars = await Console.readLineAsync(`${MESSAGE.INPUT_CARS} \n`);

  raceCars.split(",").forEach((car) => {
    if (car.length > 5) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    } else {
      cars.push(car);
    }
  });

  return cars;
};

const getRaceCount = async () => {
  const raceCount = await Console.readLineAsync(`${MESSAGE.INPUT_COUNT} \n`);

  if (isNaN(raceCount)) {
    throw new Error(ERROR.COUNT_FORMAT);
  }

  return raceCount;
};

export { getRaceCars, getRaceCount };
