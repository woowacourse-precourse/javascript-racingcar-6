import { Console } from "@woowacourse/mission-utils";
import { calculateWinner, calculateMovement } from "./Calculator.js";
import { checkInputRaceCars, checkInputMoveCount } from "./Validator.js";
import { RACE_CAR_INPUT, MOVECOUNT_INPUT, WINNER_MESSAGE, RESULT_MESSAGE } from "./Constants/Message.js";

let car = [];
let movement = [];
let carCount = 0;

async function inputRaceCars() {
  const raceCars = await Console.readLineAsync(RACE_CAR_INPUT);
  car = raceCars.split(',');
  checkInputRaceCars(car);
  carCount = car.length;
  movement = car.map(name => name + ' : ');
  return car;
}

async function inputMoveCount() {
  const moveCount = await Console.readLineAsync(MOVECOUNT_INPUT);
  checkInputMoveCount(Number(moveCount));
  return Number(moveCount);
}

function printGameProgress() {
  movement.forEach(result => {
    Console.print(result);
  });
  Console.print(' ');
}

function printGameWinner() {
  const winnerIndexes = calculateWinner(movement, car);
  const winners = winnerIndexes.map(playerIndex => car[playerIndex]);
  const winnerMessage = winners.join(', ');
  Console.print(WINNER_MESSAGE + winnerMessage);
}

async function playGame() {
  await inputRaceCars();
  let moveCount = await inputMoveCount();
  Console.print(RESULT_MESSAGE);
  while (moveCount > 0) {
    calculateMovement(movement);
    printGameProgress();
    moveCount -= 1;
  }
  printGameWinner();
}

export { playGame };
