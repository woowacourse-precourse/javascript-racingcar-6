import { Console } from "@woowacourse/mission-utils";
import generateRandomNumber from "../utils/generateRandomNumber";
import findWinner from "../model/findWinner";

const printResult = async (cars, trials) => {
  let map = new Map();

  for (let i = 0; i < cars.length; i++) {
    map.set(cars[i], 0);
  }

  Console.print("실행 결과");

  const makingProgress = (index) => {
    const randomNumber = generateRandomNumber();
    if (randomNumber >= 4) {
      map.set(cars[index], map.get(cars[index]) + 1);
    }
    Console.print(`${cars[index]} : ` + "-".repeat(map.get(cars[index])));
  };

  const racingCars = () => {
    for (let j = 0; j < cars.length; j++) {
      makingProgress(j);
    }
    Console.print("\n");
  };

  for (let i = 0; i < trials; i++) {
    racingCars();
  }

  Console.print(findWinner(map));
};

export default printResult;
