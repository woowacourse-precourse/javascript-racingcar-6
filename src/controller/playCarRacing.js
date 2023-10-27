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

    cars.forEach((car, index) => {
      if (randomNumbers[index] > 3) {
        carDic[car] += "-";
      }
    });

    cars.forEach((car) => {
      Console.print(`${car} : ${carDic[car]}`);
    });

    Console.print("");
  }
};

// playCarRacing(["a", "b", "c"], 5);
