import { MissionUtils } from '@woowacourse/mission-utils';

class RoundHandler {
  constructor(namesArray) {
    this.names = namesArray;
    this.score = {};

    this.names.forEach(car => {
      this.score[`${car}`] = 0;
    });
  }

  runRound() {
    this.names.forEach(car => {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      this.score[`${car}`] += randomNumber >= 4 ? 1 : 0;
    });
  }

  getRoundResult() {
    const roundResult = this.names.map(car => {
      const scoreCount = '-'.repeat(this.score[`${car}`]);
      return `${car} : ${scoreCount}`;
    });
    roundResult.push('');
    return roundResult;
  }

  getWinners() {
    let winners = [this.names[0]];

    for (let i = 0; i < this.names.length - 1; i++) {
      const oneCar = winners[0];
      const oneScore = this.score[`${oneCar}`];
      const anotherCar = this.names[i + 1];
      const anotherScore = this.score[`${anotherCar}`];

      winners = anotherScore > oneScore ? [anotherCar] : winners;
      winners = oneScore === anotherScore ? [...winners, anotherCar] : winners;
    }

    return winners;
  }
}

export default RoundHandler;
