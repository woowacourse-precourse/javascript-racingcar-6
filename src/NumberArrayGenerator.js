import { Random } from "@woowacourse/mission-utils";

class NumberArrayGenerator {
  createRandomArray(racingCarMembers, roundNumber) {
    const racingResults = new Array(racingCarMembers.length).fill(0).map(() => new Array());

    for (let i = 0; i < roundNumber; i++) {
      racingCarMembers.forEach((_, index) => {
        racingResults[index].push(this.createRandomNumbers());
      });
    }
    return racingResults;
  }

  createRandomNumbers() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) {
      return true;
    } else {
      return false;
    }
  }
}

export default NumberArrayGenerator;
