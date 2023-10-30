import { Random } from "@woowacourse/mission-utils";

function calculateMovement(movement) {
  let index = 0;
  while (index < movement.length) {
    const randomNumber = makeRandomNumber();
    if (randomNumber >= 4) movement[index] += '-';
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

function makeRandomNumber() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  return randomNumber;
}

export { calculateMovement, calculateWinner };
