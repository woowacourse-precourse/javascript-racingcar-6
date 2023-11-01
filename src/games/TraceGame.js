import { print, pickUniqueNumbersInRange } from "../utils/missionUtils.js";

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
  return traceRoad;
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

export { TraceGame };
