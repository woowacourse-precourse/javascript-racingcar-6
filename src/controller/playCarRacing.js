import { Console } from "@woowacourse/mission-utils";

import { Messages } from "../common/message.js";
import pickRandomNumbers from "./pickRandomNumbers.js";

const playCarRacing = (cars, count) => {
  let carDic = {};

  cars.forEach((carName) => {
    carDic[carName] = "";
  });

  Console.print(Messages.CAR_RACING_RESULT);

  for (let i = 0; i < count; i++) {
    const randomNumbers = pickRandomNumbers(cars.length);
    updateCarDic(cars, carDic, randomNumbers);
    printCarResults(cars, carDic);
    Console.print("");
  }
};

const updateCarDic = (cars, carDic, randomNumbers) => {
  cars.forEach((car, index) => {
    if (randomNumbers[index] > 3) {
      carDic[car] += "-";
    }
  });
};

const printCarResults = (cars, carDic) => {
  cars.forEach((car) => {
    Console.print(`${car} : ${carDic[car]}`);
  });
};

export default playCarRacing;
