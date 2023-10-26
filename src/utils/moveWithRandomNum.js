import { Console, Random } from "@woowacourse/mission-utils";

const moveWithRandomNum = (cars, carsWithMoveNum) => {
  cars.forEach((car) => {
    const randomNum = Random.pickNumberInRange(0, 9);
    randomNum >= 4 ? carsWithMoveNum[car]++ : null;
    const printMoveToLine = "-".repeat(carsWithMoveNum[car]);
    Console.print(`${car} : ${printMoveToLine}`);
  });
};

export default moveWithRandomNum;
