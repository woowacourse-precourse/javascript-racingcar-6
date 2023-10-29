import { Console } from "@woowacourse/mission-utils";
import generateRandomNumber from "../utils/generateRandomNumber";
import findWinner from "../model/findWinner";

const printResult = async (cars, trials) => {
  Console.print("실행 결과");
  let map = new Map();

  for (let i = 0; i < cars.length; i++) {
    map.set(cars[i], 0);
  }

  const makingProgress = (index) => {
    const randomNumber = generateRandomNumber();
    Console.print(`randomNumber : ${randomNumber}`);
    if (randomNumber >= 4) {
      map.set(cars[index], map.get(cars[index]) + 1);
    }
    Console.print(`${cars[index]} : ` + "-".repeat(map.get(cars[index])));
  };

  const racingCars = () => {
    for (let j = 0; j < cars.length; j++) {
      makingProgress(j);
    }
  };

  for (let i = 0; i < trials; i++) {
    racingCars();
  }

  Console.print(findWinner(map));
};

export default printResult;
