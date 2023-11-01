import { Console, Random } from "@woowacourse/mission-utils";
import { GAME_MSG } from "./message";
import { validCarNames, validTryTimes } from "./validation";

const CAR_NAME = [];
const CAR_NAME_LENGTH = [];

export const startGame = async () => {
  const carNames = await getCarsName();
  const tryTimes = await getTryTimes();
  printExecutionResult(carNames, tryTimes);
  printFinalWinner(carNames);
  endGame();
};

const getCarsName = async () => {
  const cars = await Console.readLineAsync(GAME_MSG.GET_CARS_NAME);
  const carNames = cars.split(",");

  validCarNames(cars, carNames);

  for (let i = 0; i < carNames.length; i++) {
    CAR_NAME.push(carNames[i]);
    CAR_NAME_LENGTH[i] = carNames[i].length;
    carNames[i] = carNames[i] + " : ";
  }

  return carNames;
};

const getTryTimes = async () => {
  const tryTimes = await Console.readLineAsync(GAME_MSG.GET_TRY_TIMES);

  validTryTimes(tryTimes);

  return tryTimes;
};

const printExecutionResult = (carNames, tryTimes) => {
  Console.print(GAME_MSG.EXECUTION_RESULT);
  while (tryTimes > 0) {
    getExecution(carNames);
    Console.print(`${carNames.join("\n")}\n`);
    tryTimes--;
  }
};
// 전진-정지에 대한 결과 추가
const getExecution = (carNames) => {
  for (let i = 0; i < carNames.length; i++) {
    if (getRandomNumber()) {
      carNames[i] = carNames[i] + "-";
    }
  }
};
// 전진-정지를 위한 랜덤 숫자 받기
const getRandomNumber = () => {
  const randomNumber = Random.pickNumberInRange(0, 9);
  if (randomNumber > 3) {
    return true;
  }
  return false;
};

/*
  printFinalWinner(): 우승자를 프린트해주는 함수
    getGameResultLength(): 가장 멀리 전진한 자동차를 구하기 위해, 자동차별 길이를 구해주는 함수
    getMax(): 
*/
const printFinalWinner = (carNames) => {
  const resultLength = getGameResultLength(carNames);
  const maxCars = getMaxOfResultLength(resultLength);
  const gameResult = maxCars.join(", ");
  Console.print(`${GAME_MSG.GAME_WINNER}${gameResult}`);
};
const getGameResultLength = (carNames) => {
  const resultLength = [];
  carNames.forEach((car, idx) => {
    resultLength.push(car.length - CAR_NAME_LENGTH[idx]);
  });
  return resultLength;
};
//
const getMaxOfResultLength = (resultLength) => {
  let max = 0;
  const maxCars = [];
  resultLength.forEach((len) => {
    max < len ? (max = len) : "";
  });
  resultLength.forEach((len, idx) => {
    max == len ? maxCars.push(CAR_NAME[idx]) : "";
  });
  return maxCars;
};

//게임종료
const endGame = () => {
  return;
};
