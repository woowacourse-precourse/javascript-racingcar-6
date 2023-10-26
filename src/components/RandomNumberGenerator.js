import { Random } from '@woowacourse/mission-utils';

class RandomNumberGenerator {
  constructor(userInputTryCount, userInputCarsCount) {
    this.arrForRace = [];
    this.userInputTryCountNumber = Number(userInputTryCount);
    this.userInputCarsCount = userInputCarsCount;
  }

  generateRandomNumber() {
    for (let i = 0; i < this.userInputTryCountNumber; i++) {
      const ARR_PER_TRY = [];
      for (let j = 0; j < this.userInputCarsCount; j++) {
        const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
        ARR_PER_TRY.push(RANDOM_NUMBER);
      }
      this.arrForRace.push(ARR_PER_TRY);
    }

    return this.arrForRace;
  }
}

export default RandomNumberGenerator;
