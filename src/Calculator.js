import { Random } from "@woowacourse/mission-utils";
import { MIN_FORWARD_VALUE, MOVING_FORWARD, RANGE_OF_RANDOM_NUMBER } from "./Constants/constant";

function makeRandomNumber() {
  const randomNumber = Random.pickNumberInRange(RANGE_OF_RANDOM_NUMBER.min, RANGE_OF_RANDOM_NUMBER.max);
  return randomNumber;
}

function calculateMovement(movement) {
  let index = 0;
  while (index < movement.length) {
    const randomNumber = makeRandomNumber();
    if (randomNumber >= MIN_FORWARD_VALUE) movement[index] += MOVING_FORWARD;
    index += 1;
  }
}

function calculateWinner(movement, car) {
  const result = movement.map((move, index) => move.length - car[index].length);
  const max = Math.max(...result);
  const maxIndexes = [];
  result.forEach((value, index) => {
      if (value === max) {
          maxIndexes.push(index);
      }
  });
  return maxIndexes;
}

export { calculateMovement, calculateWinner };
