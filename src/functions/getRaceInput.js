import { Console } from "@woowacourse/mission-utils";
import { ERROR, MESSAGE } from "../constants/constants.js";

const getRaceCars = async () => {
  const cars = [];
  const race_cars = await Console.readLineAsync(`${MESSAGE.INPUT_CARS} \n`);

  race_cars.split(",").forEach((car) => {
    if (car.length > 5) {
      throw new Error(ERROR.CAR_NAME_LENGTH);
    } else {
      cars.push(car);
    }
  });

  return cars;
};

const getRaceCount = async () => {
  const race_count = await Console.readLineAsync(`${MESSAGE.INPUT_COUNT} \n`);

  if (isNaN(race_count)) {
    throw new Error(ERROR.COUNT_FORMAT);
  }

  return race_count;
};

export { getRaceCars, getRaceCount };
