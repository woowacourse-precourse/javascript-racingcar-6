import { MissionUtils } from '@woowacourse/mission-utils';

class CarRacing {
  static pickNumberInRange(startInclusive, endInclusive) {
    return MissionUtils.Random.pickNumberInRange(startInclusive, endInclusive);
  }
}

export class RaceSimulator {
  constructor(carNames) {
    this.carNames = carNames;
    this.cars = this.carNames.map((name) => ({ name, position: '' }));
    this.raceResults = [];
  }

  simulateRace(tryNumber) {
    for (let i = 0; i < tryNumber; i++) {
      this.cars.forEach((car) => {
        const randomNumber = CarRacing.pickNumberInRange(0, 9);
        if (randomNumber >= 4) {
          car.position += '-';
        }
      });

      const raceState = this.cars
        .map((car) => `${car.name} : ${car.position}`)
        .join('\n');
      this.raceResults.push(raceState);
    }
  }

  getRaceResults() {
    return this.raceResults;
  }
}

export default CarRacing;
