import { Random } from "@woowacourse/mission-utils";

export const generateRandomNumber = (size) => {
  const randomNumbers = [];

  while (randomNumbers.length < size) {
    const randomNumber = Random.pickNumberInRange(0, 9);
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}