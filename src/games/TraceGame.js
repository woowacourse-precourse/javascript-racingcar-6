import {
  print,
  readLineAsync,
  pickUniqueNumbersInRange,
} from "../utils/missionUtils.js";

import { CONSTANT } from "../constants/constant.js";

const TraceGame = ({ cars, inputCount }) => {
  print("실행 결과");
  print(cars);
  print(inputCount);
  print(cars.length);
  for (let i = 0; i < inputCount; i++) {
    MakeRandomNumber(cars.length);
  }
};

const MakeRandomNumber = (carCount) => {
  const randomNumber = pickUniqueNumbersInRange(
    CONSTANT.START_INCLUSIVE,
    CONSTANT.END_INCLUSIVE,
    carCount
  );
  print(randomNumber);
};

const TraceRace = (cars) => {
  print(result);
};

export { TraceGame };
