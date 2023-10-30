import consoleControl from "../util/consoleControl.js";
import moveSign from "../util/moveSign.js";

let maxNumber = 0;

export default function racingGame(carList, tryCount) {
  const carObject = initializeCarObject(carList);
  consoleControl.printGameStart();
  for (let index = 0; index < tryCount; index++) {
    carMove(carObject);
    consoleControl.printNewLine();
  }
  printWinner(carObject);
}

function carMove(carObject) {
  for (let car in carObject) {
    if (moveSign()) {
      carObject[car]++;
      consoleControl.printResult(car, moveCar(carObject[car]));
      maxNumberCheck(carObject[car]);
    } else {
      consoleControl.printResult(car, moveCar(carObject[car]));
    }
  }
}
function initializeCarObject(carList) {
  const carObject = {};
  for (let i = 0; i < carList.length; i++) {
    carObject[carList[i]] = 0;
  }

  return carObject;
}

function moveCar(moveCount) {
  const move = "-";
  return move.repeat(moveCount);
}

function maxNumberCheck(carObj) {
  if (carObj > maxNumber) {
    maxNumber = carObj;
  }
}

function printWinner(carObject) {
  let winner = [];
  for (let car in carObject) {
    if (carObject[car] === maxNumber) {
      winner.push(" " + car);
    }
  }
  consoleControl.printWinner(winner);
}
