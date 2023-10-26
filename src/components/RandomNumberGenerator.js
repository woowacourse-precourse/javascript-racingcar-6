import { Random } from '@woowacourse/mission-utils';

class RandomNumberGenerator {
  constructor(userInputTryCount, userInputCarsCount) {
    this.arrForRace = [];
    this.userInputTryCountNumber = Number(userInputTryCount);
    this.userInputCarsCount = userInputCarsCount;
  }

  // 이전 구성(각 시도마다 배열을 만들었고 길이 5짜리의 배열을 만들었음)
  //   generateRandomNumber() {
  //     for (let i = 0; i < this.userInputTryCountNumber; i++) {
  //       const ARR_PER_TRY = [];
  //       for (let j = 0; j < this.userInputCarsCount; j++) {
  //         const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
  //         ARR_PER_TRY.push(RANDOM_NUMBER);
  //       }
  //       this.arrForRace.push(ARR_PER_TRY);
  //     }

  //     return this.arrForRace;
  //   }

  generateRandomNumber() {
    for (let i = 0; i < this.userInputCarsCount; i++) {
      const ARR_PER_CAR = [];
      for (let j = 0; j < this.userInputTryCountNumber; j++) {
        const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
        ARR_PER_CAR.push(RANDOM_NUMBER);
      }
      this.arrForRace.push(ARR_PER_CAR);
    }

    return this.arrForRace;
  }
}

export default RandomNumberGenerator;
