import currentRacingState from "./currentRacingState.js";
import moveForward from "../utils/moveForward.js";
import generateRandomNumber from "../utils/generateRandomNumber.js";
import { Console } from "@woowacourse/mission-utils";

const currentRacingStateArray = (array) => {
  const input_array = [...array];
  input_array.forEach((array_item) => {
    if (moveForward(generateRandomNumber())) {
      array_item.currentState++;
    }
    Console.print(currentRacingState(array_item));
  });
  return input_array;
};

export default currentRacingStateArray;
