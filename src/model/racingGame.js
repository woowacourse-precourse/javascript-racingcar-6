import consoleControl from "../util/consoleControl.js";
import moveSign from "../util/moveSign.js";

let maxNumber = 0;

export default function racingGame(carList, tryCount) {
  consoleControl.printGameStart();
  for (let index = 0; index < tryCount; index++) {
    carMove(carList);
    consoleControl.printNewLine();
  }
  printWinner(carList);
}

function carMove(carList) {
  for (let car in carList) {
    if (moveSign()) {
      carList[car]++;
      consoleControl.printResult(car, moveCar(carList[car]));
      maxNumberCheck(carList[car]);
    } else {
      consoleControl.printResult(car, moveCar(carList[car]));
    }
  }
}

function moveCar(moveCount) {
  const move = "-";
  return move.repeat(moveCount);
}

function maxNumberCheck(carList) {
  if (carList > maxNumber) {
    maxNumber = carList;
  }
}

function printWinner(carList) {
  let winner = [];
  for (let car in carList) {
    if (carList[car] === maxNumber) {
      winner.push(" " + car);
    }
  }
  consoleControl.printWinner(winner);
}
