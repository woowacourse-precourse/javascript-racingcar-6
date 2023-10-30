import { Console, Random } from "@woowacourse/mission-utils";

const gameController = {
  moveAndMakeResult(car, carsWithMoveNum) {
    const randomNum = Random.pickNumberInRange(0, 9);
    randomNum >= 4 ? carsWithMoveNum[car]++ : null;
    return "-".repeat(carsWithMoveNum[car]);
  },

  playAllRounds(round, carArr, carsWithMoveNum) {
    let currentRound = 0;
    while (currentRound < round) {
      carArr.forEach((car, index) => {
        const printLineByMove = gameController.moveAndMakeResult(
          car,
          carsWithMoveNum,
        );
        Console.print(`${carArr[index]} : ${printLineByMove}`);
      });
      Console.print("");
      currentRound++;
    }
  },

  selectWinner(cars, carsWithMoveNum) {
    let winnersArr = [];
    cars.forEach((car) => {
      if (!winnersArr.length) {
        winnersArr.push(car);
      } else if (carsWithMoveNum[winnersArr] === carsWithMoveNum[car]) {
        winnersArr.push(car);
      } else if (carsWithMoveNum[winnersArr] < carsWithMoveNum[car]) {
        winnersArr.length = 0;
        winnersArr.push(car);
      } else {
      }
    });
    return winnersArr;
  },
};

export default gameController;
