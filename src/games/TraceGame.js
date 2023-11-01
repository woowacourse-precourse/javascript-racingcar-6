import {
  print,
  readLineAsync,
  pickUniqueNumbersInRange,
} from "../utils/missionUtils.js";

import { CONSTANT } from "../constants/constant.js";
import { GAME_MESSAGE } from "../constants/gameMessage.js";

const TraceGame = ({ cars, inputCount }) => {
  print(GAME_MESSAGE.GAME_RESULT);
  const traceRoad = new Array(cars.length).fill("");
  for (let i = 0; i < inputCount; i++) {
    const randomNumber = MakeRandomNumber(cars.length);
    MoveCars(randomNumber, traceRoad);
    PrintResult(cars, traceRoad);
  }
  FinalWinner(cars, traceRoad);
};

const MakeRandomNumber = (carCount) => {
  const randomNumber = pickUniqueNumbersInRange(
    CONSTANT.START_INCLUSIVE,
    CONSTANT.END_INCLUSIVE,
    carCount
  );
  return randomNumber;
};

const MoveCars = (randomNumber, traceRoad) => {
  for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] >= 4) {
      traceRoad[i] += "-";
    }
  }
};

const PrintResult = (cars, traceRoad) => {
  for (let i = 0; i < cars.length; i++) {
    print(cars[i] + " : " + traceRoad[i]);
  }
  print("\n");
};

const FinalWinner = (cars, traceRoad) => {
  const maxDistance = CheckMaxDistance(traceRoad);
  const winner = FindWinner(cars, traceRoad, maxDistance);
  print(GAME_MESSAGE.GAME_WINNER + winner.join(", "));
};

const CheckMaxDistance = (traceRoad) => {
  let maxDistance = 0;
  for (let i = 0; i < traceRoad.length; i++) {
    if (traceRoad[i].length > maxDistance) {
      maxDistance = traceRoad[i].length;
    }
  }
  return maxDistance;
};

const FindWinner = (cars, traceRoad, maxDistance) => {
  const winner = [];
  for (let i = 0; i < traceRoad.length; i++) {
    if (traceRoad[i].length === maxDistance) {
      winner.push(cars[i]);
    }
  }
  return winner;
};

export { TraceGame };
