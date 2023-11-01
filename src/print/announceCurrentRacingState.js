import { Console } from "@woowacourse/mission-utils";
import makeStringCurrentRacingState from "../utils/makeStringCurrentRacingState.js";
import moveForward from "../utils/moveForward.js";
import generateRandomNumber from "../utils/generateRandomNumber.js";

const announceCurrentRacingState = (array) => {
  const inputArray = [...array];
  inputArray.forEach((arrayItem) => {
    if (moveForward(generateRandomNumber())) {
      arrayItem.currentState += 1;
    }
    Console.print(makeStringCurrentRacingState(arrayItem));
  });
  return inputArray;
};

export default announceCurrentRacingState;
